import { Text,View } from "react-native";
import styles from "./style";

const ItemOrder = ({order}) => {

    // const {rest} = props.order;
    
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>1</Text>
            </View>
            <Text style={styles.ItemName}>{order.name}</Text>
            <Text style={styles.tprice}>ZAR {order.price}</Text>
        </View> 
    );


}

export default ItemOrder;