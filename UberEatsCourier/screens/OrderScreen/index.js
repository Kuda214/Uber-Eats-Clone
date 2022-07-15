import OrderItem from "../../src/components/OrderItem";
import {Text, View, FlatList,Dimensions, ActivityIndicator} from 'react-native';
import orders from '../../assets/data/orders.json';
import Header  from "./Header";
import styles from "./style";
import { useRef ,useEffect, useState} from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Animated from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";
import { Entypo } from '@expo/vector-icons';

const orderr = orders[0];

const OrderScreen = () => {
    const bottomSheetRef = useRef(null);

    const [driverLocation, setDriverLocation] = useState({
        latitude: 10,
        longitude: 10,
    });

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (!status === "granted") {
            console.log("Nonono");
            return;
          }
    
          let location = await Location.getCurrentPositionAsync();
          setDriverLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
          console.log(location);
        })();
      }, []);

    if(!driverLocation)
    {
        return <ActivityIndicator size={'large'}></ActivityIndicator>
    }

    return(
        <View style={styles.page}>
            <View style={{ backgroundColor: 'lightblue', flex:1}}>
            <MapView
                style={{
                height: Dimensions.get('window').height, 
                width: Dimensions.get('window').width,
                flex: 1,}}
                showsUserLocation ={true}
                showsBuildings={true}
                followsUserLocation={true}
                // initialRegion={{
                //     latitude: driverLocation.latitude,
                //     longitude: driverLocation.longitude,
                //     latitudeDelta: 0.07,
                //     longitudeDelta: 0.07,
                //   }}
                >
                {orders.map((order) => 
                    <Marker 
                        title={order.Restaurant.name} 
                        description={order.description} 
                        coordinate={{
                            latitude: order.Restaurant.lat, 
                            longitude: order.Restaurant.lng,
                        }}>
                        <View style={styles.shopIcon}>
                            <Entypo name="shop" size={16} color={"white"}></Entypo>
                        </View>
                    </Marker>
                )}   
            </MapView>
                 
                
                <BottomSheet ref={bottomSheetRef}  snapPoints={["14%","94%"]} enabledGestureInteraction={true}>
                    <View style={{flex:1}}>
                        <Header o={orders}/>
                        <FlatList
                        data = {orders}
                        renderItem= {({item}) => <OrderItem order={item}/>} >
                        </FlatList> 
                    </View>
                </BottomSheet>
            </View>
        </View>
    );
}

export default OrderScreen;