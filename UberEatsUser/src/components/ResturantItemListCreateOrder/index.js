import { Text,View } from "react-native";
import styles from "./styles";

const BasketDishItems = (props) => {

    const {name, price} = props.basketDishes;

    return (
        <View style={styles.row}>
        <View style={styles.quantityContainer}>
            <Text>1</Text>
        </View>
        <Text style={styles.ItemName}>{name}</Text>
        <Text style={styles.tprice}>ZAR {price}</Text>
    </View>
    );
}

export default BasketDishItems;