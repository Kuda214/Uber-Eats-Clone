import { Text,View } from "react-native";
import styles from "./styles";

const BasketDishItems = ({basketDish}) => {
    
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>{basketDish.quantity}</Text>
            </View>
            <Text style={styles.ItemName}>{basketDish.Dish.name}</Text>
            <Text style={styles.tprice}>ZAR {basketDish.Dish.price}</Text>
        </View> 
    );
}

export default BasketDishItems; 