import { View,Text, FlatList, Pressable } from "react-native";
import styles from "./style";
import {AntDesign} from '@expo/vector-icons';
import { useState } from "react";
import BasketDishItems from "../../components/ResturantItemListCreateOrder";
import { useBasketContext } from "../../contexts/BasketContext";
import { useOrderContext } from "../../contexts/OrderContext";
import { useNavigation } from "@react-navigation/native";


// const restaurant = resturants[0];
// const quantity = 0; wont work we need to rerender

const Basket = () => {

    const { restaurant, basketDishes, totalPrice } = useBasketContext();
    const { createOrder } = useOrderContext();
    const navigation = useNavigation();
  
    const onCreateOrderPress = async () => {
      const newOrder = await createOrder();
      navigation.navigate("OrdersTab", {
        screen: "Order",
        params: { id: newOrder.id },
      });
    };

    return (
        <View style={styles.page}>
            <View style={styles.dishInfo}>
                <Text style={styles.name}>{restaurant?.name}</Text>

                <Text style={styles.subTitle}>Your Items</Text>
               
                <FlatList
                    data={basketDishes}
                    renderItem={({item}) => <BasketDishItems basketDish={item}
                    keyExtractor={(item) => item.name} />}>
                    
                </FlatList>
                <View style={styles.horizontalSeperator}></View>
            </View>


            <Pressable  onPress={onCreateOrderPress} style={styles.button}>
                <Text style={styles.buttonText}>
                  Create Order &#8226; 
                  R {totalPrice.toFixed(2)}
                </Text>
            </Pressable>
        </View>
    );
}

export default Basket;