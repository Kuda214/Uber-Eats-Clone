import { View,Text } from "react-native";
import styles from "./style";
import resturants from '../../../assets/data/restaurants.json'
import {AntDesign} from '@expo/vector-icons';
import { useState } from "react";


const restaurant = resturants[0];
// const quantity = 0; wont work we need to rerender

const Basket = () => {

    const [quantity,setQuantity] = useState(1); //array of 2 values
    // const [totalPrice, setTotalPrice] = useState(dish.price);
    //vale = 2 wont work so setter(2)

    const onMinus = () =>{

        if(quantity > 1)
        {
            setQuantity(quantity -1);
            // setTotalPrice(totalPrice - dish.price);

        }
   
    }
    const onPlus = () =>
    {
        setQuantity(quantity + 1);
        // setTotalPrice(totalPrice + dish.price);

    }

    return (
        <View style={styles.page}>
            <View style={styles.dishInfo}>
                <Text style={styles.name}>{restaurant.name}</Text>

                <Text>Your Items</Text>
                <View></View>

                <View style={styles.horizontalSeperator}></View>

            </View>


            <View style={styles.button}>
                <Text style={styles.buttonText}>
                  Create Order 
                </Text>
            </View>
        </View>
    );
}

export default Basket;