import { View,Text, Pressable, ActivityIndicator} from "react-native";
import styles from "./style";
import resturants from '../../../assets/data/restaurants.json'
import {AntDesign} from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Dish } from "../../models";

// const dish = resturants[2].dishes[0];
// const quantity = 0; wont work we need to rerender

const DishDetailedScreen = () => {
    const route = useRoute();
    const [dish, setDish] = useState([]);
    const id = route.params.id;


    useEffect(() =>{

        //Fetch id(ed) Resturant
        if(id){
            DataStore.query(Dish,id).then(setDish);
        }
        
    },[id]);

    if(!dish)
    {
        return <ActivityIndicator size={"large"} color={"grey"}/>
    }

    const navigation = useNavigation();
    const [quantity,setQuantity] = useState(1); //array of 2 values
    const [totalPrice, setTotalPrice] = useState(dish.price);
    //vale = 2 wont work so setter(2)

    const onMinus = () =>{

        if(quantity > 1)
        {
            setQuantity(quantity -1);
            setTotalPrice(totalPrice - dish.price);

        }
   
    }
    const onPlus = () =>
    {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + dish.price);

    }

    return (
        <View style={styles.page}>
            <View style={styles.dishInfo}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description}>{dish.description}</Text>
                <View style={styles.horizontalSeperator}></View>
            </View>

            <View style={styles.row}>
                <AntDesign name="minuscircleo" size={45} color={"black"} onPress={onMinus}/>
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={45} color={"black"} onPress={onPlus}/>

            </View>

            <Pressable onPress={() => navigation.navigate('Basket')} style={styles.button}>
                <Text style={styles.buttonText}>
                    Add {quantity} to basket &#8226; R{totalPrice}
                </Text>
            </Pressable>
        </View>
    );
}

export default DishDetailedScreen;