import { View,Text, FlatList, Pressable } from "react-native";
import styles from "./style";
import resturants from '../../../assets/data/restaurants.json'
import {AntDesign} from '@expo/vector-icons';
import { useState } from "react";
import BasketDishItems from "../../components/ResturantItemListCreateOrder";



const restaurant = resturants[0];
// const quantity = 0; wont work we need to rerender

const Basket = () => {
    return (
        <View style={styles.page}>
            <View style={styles.dishInfo}>
                <Text style={styles.name}>{restaurant.name}</Text>

                <Text style={styles.subTitle}>Your Items</Text>
               
                <FlatList
                    data={restaurant.dishes}
                    renderItem={({item}) => <BasketDishItems basketDishes={item}
                    keyExtractor={(item) => item.name} />}>
                    
                </FlatList>
                <View style={styles.horizontalSeperator}></View>


            </View>


            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                  Create Order 
                </Text>
            </Pressable>
        </View>
    );
}

export default Basket;