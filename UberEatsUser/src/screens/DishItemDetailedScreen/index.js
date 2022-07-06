import { View,Text } from "react-native";
import styles from "./style";
import resturants from '../../../assets/data/restaurants.json'

const dish = resturants[0].dishes[0];

const DishDetailedScreen = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.horizontalSEperator}></View>
        </View>
    );
}

export default DishDetailedScreen;