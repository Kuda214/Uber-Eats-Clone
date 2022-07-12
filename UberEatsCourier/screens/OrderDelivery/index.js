import {Text, View} from 'react-native';
import orders from '../../assets/data/orders.json';
import styles from "./style";
import { useRef } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import {FontAwesome5} from '@expo/vector-icons';

const orderr = orders[0];

const OrderDelivery = () => {
    const bottomSheetRef = useRef(null);

    return(
        <View style={styles.page}>
            <View style={{ backgroundColor: 'lightblue', flex:1}}>
                <BottomSheet ref={bottomSheetRef}  snapPoints={["10%","94%"]}>
                    <View style={{flex:1}}>

                    <View style={styles.deliveryHeader}>
                        <Text style={styles.orderTime} >14 min</Text>
                        <FontAwesome5
                            name="shopping-bag"
                            size={30}
                            color='#3FC060'
                            style = {styles.navigationIcon}
                            >
                        </FontAwesome5>
                        <Text style={styles.orderDistance}>5km</Text>
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

                    <View style={styles.acceptButton}>
                        <Text style={styles.acceptButtonText}>Accept order </Text>
                    </View>

                    </View>
                </BottomSheet>
            </View>
            
        </View>
    );
}

export default OrderDelivery; 
