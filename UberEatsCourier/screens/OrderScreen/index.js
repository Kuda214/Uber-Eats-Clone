import OrderItem from "../../src/components/OrderItem";
import {Text, View, FlatList} from 'react-native';
import orders from '../../assets/data/orders.json';
import Header  from "./Header";
import styles from "./style";
import { useRef } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Animated from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const orderr = orders[0];

const OrderScreen = () => {
    const bottomSheetRef = useRef(null);

    return(
        <View style={styles.page}>
            <View style={{ backgroundColor: 'lightblue', flex:1}}>
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