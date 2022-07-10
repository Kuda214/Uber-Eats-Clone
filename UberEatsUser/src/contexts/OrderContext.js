import { Auth } from "aws-amplify";
import { createContext,useContext, useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Order, OrderDish, Basket } from "../models";
import { useAuthContext } from "./AuthContext";
import { useBasketContext } from "./BasketContext";

const OrderContext = createContext();

const OrderContextProvider = ({children}) => {

    const {dbUser }= useAuthContext();
    const {restuarant ,totalPrice, basket} = useBasketContext();
     
    const  [orders,setOrders] = useState([]);

    useEffect(()=>{
        DataStore.query(Order, o => o.userID("eq",dbUser.id) ).then(setOrders);
    },[dbUser]);


    const createOrder = async () => {
       //create order
       
       const newOrder = await DataStore.save(new Order({
        userID: dbUser.id,
        Restuarant: restuarant,
        status: 'NEW',
        total: totalPrice,
       }));

       //add all dishes to order
        await Promise.all(
            basketDishes.map((basketDish) => 
                DataStore.save(new OrderDish({
                    quantity: basketDish.quantity, 
                    orderID: newOrder.id, 
                    Dish: basketDish.Dish,
        }))));


       //delete order
       await DataStore.delete(basket);

       setOrders([...orders,newOrder]);
    };

    const getOrder = async(id) => {
        const order = await DataStore.query(Order,id);
        const orderDishes = await DataStore.query(OrderDish, od => od.orderID("eq",id));

        return {...order, dishes: orderDishes};
    };

    return (
        <OrderContext.Provider value={{createOrder, orders, getOrder}}>
            {children}
        </OrderContext.Provider>
    );
}

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);