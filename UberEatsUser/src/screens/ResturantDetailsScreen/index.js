import {Text, View, Image, FlatList,StyleSheet } from 'react-native';
import styles from './style';
import {Ionicons} from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import Header from './Header.js';
import {useRoute,useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { DataStore } from 'aws-amplify';
import { Restuarant } from '../../models';
import { Dish } from '../../models';


const ResturantDetailsScreen = (props) =>{
     const [restaurant, setRestuarant] = useState(null); 
     const [dishes, setDishes] = useState([]);
    
    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;
    

    useEffect(() =>{

        //Fetch id(ed) Resturant
        if (id){
        DataStore.query(Restuarant,id).then(setRestuarant);
        DataStore.query(Dish,(dish)=>dish.restuarantID("eq",id)).then(setDishes);
        }
    },[id]);

    if(!restaurant)
    {
        return <ActivityIndicator size={"large"} color={"grey"}/>; //style the load button
    }


    return(
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header resturant={restaurant}/>}
                data={dishes}
                renderItem={({item,index})=> <DishListItem dish={item}
                keyExtractor={(item) => item.name} />} 
            />
            
            <Ionicons
                name='arrow-back-circle'
                size={35}
                color='#fff'
                style={styles.iconContainer}
                onPress={()=> navigation.goBack()}
            ></Ionicons>

        </View>
    );
}



export default ResturantDetailsScreen;