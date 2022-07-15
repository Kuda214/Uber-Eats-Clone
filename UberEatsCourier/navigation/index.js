import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../screens/OrderScreen";
import OrderDelivery from "../screens/OrderDelivery";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(
        <Stack.Navigator initialRouteName="OrderScreen" screenOptions={{headerShown:false}}>
            <Stack.Screen name="OrderScreen" component={OrderScreen} />
            <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>

        </Stack.Navigator>
    );
};

export default Navigation;