import { createContext, useState,useEffect, useContext, useInsertionEffect } from "react";
import { Auth } from "aws-amplify";
import { DataStore } from "aws-amplify";
import { User } from "../models";

const AuthContext = createContext({});


const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(null);
    const [dbUser, setDbUser] = useState(null);
    

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setAuthUser);
    },[]);

    useInsertionEffect(() =>{
        DataStore.query(User, (user) => user.sub("eq",sub)).then((users) => setDbUser(users[0]));
    },[sub])
    // sub is id

    const sub = authUser?.attributes?.sub;

    return (
        

        <AuthContext.Provider value={{authUser,dbUser,sub, setDbUser}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;

export const  useAuthContext  = () => useContext(AuthContext);