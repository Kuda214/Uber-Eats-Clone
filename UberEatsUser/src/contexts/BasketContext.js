import { createContext, useState,useEffect, useContext, useInsertionEffect } from "react";
import { Auth } from "aws-amplify";
import { DataStore } from "aws-amplify";
import { User, Basket, BasketDish } from "../models";
import { useAuthContext} from '../contexts/AuthContext'

const BasketContext = createContext();

const BasketContextProvider = ({children}) => {
    const {dbUser} = useAuthContext();
    const {sub} = useAuthContext();
    const [restuarant, setRestuarant] = useState(null);
    const [basket,setBasket] = useState(null);
    const [basketDishes, setBasketDishes] = useState([]);
    
    const totalPrice = basketDishes.reduce(
        (sum, basketDish) => sum + basketDish.quantity * basketDish.Dish.price,
        restuarant?.deliveryFee
      );

    useEffect(() => {
        DataStore.query(Basket,(b) => b.restuarantID("eq",dbUser.id)).then((baskets) => setBasket(baskets[0]));
    },[dbUser,restuarant]);

    useEffect(() => {
        if(basket)
        {
            DataStore.query(BasketDish, bd => bd.basketID("eq",basket.id)).then(setBasketDishes);
        }
    });

    const addDishToBasket = async (dish,quantity) => {
        //check if a basket exists
        let theBasket = basket || (await createNewBasket());

        // create a BasketDish item and save to Datastore
        const str = quantity.toString();
        const newDish = await DataStore.save(
          new BasketDish({ quantity:str, Dish: dish, basketID: theBasket.id }));

        setBasketDishes([...basketDishes,newDish]);
        
    }

    const createNewBasket = async() => {
        const newBasket = await DataStore.save(
            new Basket({userID: dbUser.id, restuarantID: restuarant.id}));

        setBasket(newBasket);
        return newBasket;

    }

    // console.log(restuarant, totalPrice);
    return(
        <BasketContext.Provider value={{addDishToBasket, setRestuarant,restaurant: restuarant, basket,basketDishes, totalPrice}}>
            {children}
        </BasketContext.Provider>
    );
}

export default BasketContextProvider;
export const useBasketContext = () => useContext(BasketContext);