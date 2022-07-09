import { createContext, useState,useEffect, useContext, useInsertionEffect } from "react";
import { Auth } from "aws-amplify";
import { DataStore } from "aws-amplify";
import { User, Basket, BasketDish } from "../models";

const BasketContext = createContext();

const BasketContextProvider = ({children}) => {
    return(
        <BasketContext.Provider>
            {children}
        </BasketContext.Provider>
    );
}

export default BasketContextProvider;
export const useBasketContext = () => useContext(BasketContext);