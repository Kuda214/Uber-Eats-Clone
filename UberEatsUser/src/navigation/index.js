import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import Basket from '../screens/Basket';
import DishDetailedScreen from '../screens/DishItemDetailedScreen';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrdersScreen';
import ResturantDetailsScreen from '../screens/ResturantDetailsScreen';
import Profile from '../screens/ProfileScreen';
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();


const RootNavigator = () =>{
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false,headerTitleAlign:'center'}}>
            <Stack.Screen name='Home' component={HomeTabs}></Stack.Screen>
            {/* <Stack.Screen name=''></Stack.Screen> */}
        </Stack.Navigator>
    );
}

const Tabs = createMaterialBottomTabNavigator();

const HomeTabs = () =>{

    return (
        <Tabs.Navigator barStyle= {{backgroundColor: 'white'}}  screenOptions={{headerTitleAlign:'center'}} >
            <Tabs.Screen 
                name='Homee' component={HomeStackNaviator} 
                options={{tabBarIcon: ({color})=> <Foundation name='home' size={24} 
                color={color}/> }}>    
            </Tabs.Screen>

            <Tabs.Screen 
                name='Orders'  
                component={OrderStackNavigator}
                options={{tabBarIcon: ({color})=> <MaterialIcons name='list-alt' size={24} 
                color={color}/> }}>    
            </Tabs.Screen>
    
            <Tabs.Screen 
                name='Profile' 
                component={ Profile }
                options={{tabBarIcon: ({color})=> <FontAwesome5 name='user-alt' size={24} 
                color={color}/> }}>    
            </Tabs.Screen>

        </Tabs.Navigator>
    );
}

const HomeStack = createNativeStackNavigator();


const HomeStackNaviator = () => {
    return (
        <HomeStack.Navigator  screenOptions={{headerTitleAlign:'center'}}>
            <HomeStack.Screen name='Restuarants' component={HomeScreen} ></HomeStack.Screen>
            <HomeStack.Screen name='Restuarant' component={ResturantDetailsScreen} options={{headerShown:false}}></HomeStack.Screen>
            <HomeStack.Screen name='Dish' component={DishDetailedScreen}></HomeStack.Screen>
            <HomeStack.Screen name='Basket' component={Basket} ></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen name="Orders" component={OrderScreen}></OrderStack.Screen>
            <OrderStack.Screen name="Order Details" component={OrderDetailsScreen}></OrderStack.Screen>
        </OrderStack.Navigator>
    );
}

export default RootNavigator;