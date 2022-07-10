import { FlatList, View, } from "react-native";
import styles from "./style";
import orders from '../../../assets/data/orders.json';
import OrderItem from "../../components/OrderItem";
import { userOrderContext } from "../../contexts/OrderContext";

// const order = orders[0];

const OrderScreen = () => {
    const {orders} = userOrderContext();
    return (
        <View style={styles.page}>
            <FlatList
                data={orders}
                renderItem={({item}) => <OrderItem order={item} />}>
            </FlatList>
        </View>
    );
}

export default OrderScreen;