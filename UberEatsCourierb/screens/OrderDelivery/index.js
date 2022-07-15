import {Text, View, Dimensions, ActivityIndicator, Pressable} from 'react-native';
import orders from '../../assets/data/orders.json';
import styles from "./style";
import { useRef } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import {FontAwesome5} from '@expo/vector-icons';
import MapView, {Marker} from 'react-native-maps';
import * as Location from "expo-location";
import {useEffect, useState} from "react";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons, Ionicons} from '@expo/vector-icons';
import MapViewDirections from 'react-native-maps-directions';
import  {useNavigation} from '@react-navigation/native'


const orderr = orders[0];

const ORDER_STATUSES ={
    READY_FOR_PICKUP: "READY_FOR_PICKUP",
    ACCEPTED: "ACCEPTED",
    PICKED_UP:"PICKED_UP",
}

const OrderDelivery = () => {
    const bottomSheetRef = useRef(null);
    const [minutes, setMinutes] = useState(0.00);
    const [distance, setDistance ] = useState(0.00);
    const [deliveryStatus,setDeliveryStatus] = useState(ORDER_STATUSES.READY_FOR_PICKUP);
    const mapRef = useRef(null);
    const [isDriverClose, setIsDriverClose] = useState(false);
    const navigation = useNavigation();
    const [isDistanceAcceptable, setIsDistanceAcceptable] = useState(false);

    const [driverLocation, setDriverLocation] = useState({
        latitude: 10,
        longitude: 10,
    });

    const    useEffectAidFunction = () => {
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
          })();
  
          const foregroundSubscription = Location.watchPositionAsync({
              accuracy: Location.Accuracy.High,
              distanceInterval: 100
          },
          (updateLocation) => {
              setDriverLocation({
                  latitude: updateLocation.coords.latitude,
                  longitude: updateLocation.coords.longitude
              })
          }
          )
          return foregroundSubscription;  
    }
    useEffect(() => {
        useEffectAidFunction();
       
      }, []);


      if(!driverLocation){
        return <ActivityIndicator size={"large"}></ActivityIndicator>
      }

      const onButtonPressed = () => {
        if(deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP)
        {
            bottomSheetRef.current?.collapse();
            mapRef.current?.animateToRegion({
                latitude: driverLocation.latitude,
                longitude: driverLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
            setDeliveryStatus(ORDER_STATUSES.ACCEPTED);
        }
        if(deliveryStatus === ORDER_STATUSES.ACCEPTED)
        {
            bottomSheetRef.current?.collapse();
            setDeliveryStatus(ORDER_STATUSES.PICKED_UP);
        }
        if(deliveryStatus === ORDER_STATUSES.PICKED_UP)
        {
            bottomSheetRef.current?.collapse();
            navigation.goBack();
            console.warn('Delivery Finished');
        }
      }

      const isButtonDisabled = () =>{
    
        if(deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP){
            return false;
        }
        if(deliveryStatus === ORDER_STATUSES.ACCEPTED && isDriverClose){
            return false;
        }
        if(deliveryStatus === ORDER_STATUSES.PICKED_UP && isDriverClose)
        {
            return false;
        }
        return true;
      }

      const renderButtonTitle = () => {

        if(deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP)
        {
            return 'Accept Order';
        }
        if(deliveryStatus === ORDER_STATUSES.ACCEPTED)
        {
            return 'Pick-Up Order';
        }
        if(deliveryStatus === ORDER_STATUSES.PICKED_UP)
        {
            return 'Complete Delivery';
        }
      }


    return(
        <View style={styles.page}>
            <View style={{ backgroundColor: 'lightblue', flex:1}}>
           
            <MapView
                ref={mapRef}
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
                    <MapViewDirections
                    origin ={driverLocation}
                    destination = {deliveryStatus === ORDER_STATUSES.ACCEPTED ? {latitude: orderr.Restaurant.lat, longitude: orderr.Restaurant.lng} :{latitude:orderr.User.lat, longitude: orderr.User.lng}}
                    strokeWidth={5}
                    waypoints={ deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP ? 
                        [{latitude: orderr.Restaurant.lat, longitude: orderr.Restaurant.lng}] : []}
                    strokeColor={'#3FC060'}
                    apikey={"AIzaSyCfXeUk8mYkYn0k6kn-01JJdrunuCWcviE"}
                    onReady={(result) => {
                        
                        setIsDriverClose(result.distance <=0.1);
                        
                        setMinutes(result.duration);
                        setDistance(result.distance);
                        if(result.distance > 10)
                        {
                            setIsDistanceAcceptable(false);
                        }
                        else
                        {
                            setIsDistanceAcceptable(true);
                        }
                    }}

                    />
                <Marker
                    coordinate={{latitude: orderr.Restaurant.lat, longitude: orderr.Restaurant.lng}}
                    title={orderr.Restaurant.name}
                    description={orderr.Restaurant.address}
                    >
                        
                        <View style={styles.shopIcon}>
                            <Entypo name="shop" size={24} color={"white"}></Entypo>
                        </View>
                </Marker>

                <Marker
                    coordinate={{latitude: orderr.User.lat,longitude: orderr.User.lng}}
                    title={orderr.User.name}
                    description={orderr.User.address}>
                        <View style={styles.shopIcon}>
                            <MaterialIcons name="restaurant" size={24} color={"white"}></MaterialIcons>
                        </View>

                </Marker>

            </MapView>
            {deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP  && (
            <Ionicons
                name="arrow-back-circle"
                onPress={() => navigation.goBack()}
                size={45}
                color={"black"}
                style={styles.iconContainer}>
                
            </Ionicons>)}
            <BottomSheet ref={bottomSheetRef}  snapPoints={["10%","94%"]}>
                    <View style={{flex:1}}>

                    <View style={styles.deliveryHeader}>
                        <Text style={styles.orderTime} >{minutes.toFixed(0)}min</Text>
                        <FontAwesome5
                            name="shopping-bag"
                            size={30}
                            color='#3FC060'
                            style = {styles.navigationIcon}
                            >
                        </FontAwesome5>
                        <Text style={styles.orderDistance}>{distance.toFixed(2)}km</Text>
                    </View>

                    <View style={styles.seperator}></View>

                    <View style={styles.orderDetails}>
                        <Text style={styles.orderRestaurantName}>
                            {orderr.Restaurant.name}
                        </Text>

                        <View style={styles.iconTextRow}>
                            <FontAwesome5 color={'grey'} name="map-marker-alt" size={18}></FontAwesome5>
                            <Text style={styles.orderAddress}>
                                {orderr.Restaurant.address}
                            </Text>
                        </View>

                        <View style={styles.iconTextRow}>
                            <FontAwesome5 color={'grey'} name="map-marker-alt" size={18}></FontAwesome5>
                            <Text style={styles.userAddress}>
                            {orderr.User.address}
                            </Text>
                        </View>


                    
                    </View>

                    <View style={styles.seperator}></View>


                    <View style={styles.orderDishes}>
                        <Text style={styles.orderDish}> Big MAC x 2 </Text>
                        <Text style={styles.orderDish}> Nandos Wrap x 1</Text>
                        <Text style={styles.orderDish}> R.S.A Burger x 3</Text>
                    </View>

                    <Pressable onPress={onButtonPressed} style={{...styles.acceptButton, backgroundColor: isButtonDisabled() ? 'grey': 'green'}} disabled={isButtonDisabled()}>
                        <Text style={styles.acceptButtonText}>{renderButtonTitle()} </Text>
                    </Pressable>

                    </View>
                </BottomSheet>
            </View>
            
        </View>
    );
}

export default OrderDelivery; 
