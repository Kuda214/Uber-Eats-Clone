import { FlatList, View, } from "react-native";
import styles from "./style";
import orders from '../../../assets/data/orders.json';
import OrderItem from "../../components/OrderItem";

// const order = orders[0];

const OrderScreen = () => {
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