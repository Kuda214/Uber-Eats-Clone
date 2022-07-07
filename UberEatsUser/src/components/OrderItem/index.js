import React from 'react';
import { Text,View,Image, Pressable } from "react-native";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

const OrderItem = ({order}) =>{

    const navigation = useNavigation();

    return(
        <Pressable onPress={() => navigation.navigate('Order Details', {id: order.id} )} style={styles.row}>
            <View>                
                <Image source={{uri : order.Restaurant.image}} style={styles.image}></Image>
            </View>

            <View style={styles.resturantInfo}>
                <Text style={styles.resturantName}>{order.Restaurant.name}</Text>  
                <Text style={styles.subTitle}>items &#8226;  ZAR 1{order.Restaurant.deliveryFee}0</Text>
                <Text style={styles.date}>{order.updatedAt}</Text>   
            </View>
                
         
        </Pressable>
    );
}

export default OrderItem;