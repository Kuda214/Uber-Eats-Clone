import OrderItem from "../../components/OrderItem";
import {Text, View, FlatList} from 'react-native';
import orders from '../../../assets/data/orders.json';
import Header  from "./Header";
import styles from "./style";
import { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const orderr = orders[0];

const OrderScreen = () => {
    const bottomSheetRef = useRef(null);

    return(
        <View style={styles.page}>
            {/* <Header />
            <FlatList
                // ListHeaderComponent={Header}
                data = {orders}
                renderItem= {({item}) => <OrderItem order={item}/>} >
            </FlatList> */}

            
        </View>
    );
}

export default OrderScreen;