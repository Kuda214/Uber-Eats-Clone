import { Text,View,FlatList } from "react-native";
import orders from '../../../assets/data/orders.json';
import Header from "./Header";
import styles from "./style";
import restuarants from '../../../assets/data/restaurants.json';
import ItemOrder from "../../components/ItemOrder";

const restuarant = restuarants[0];

const OrderDetailsScreen = () => {
    return(
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header/>}
                data={restuarant.dishes}
                renderItem={({item}) => <ItemOrder order={item}
                keyExtractor={(item) => item.name}/>}
            >

            </FlatList>
        </View>
    );

}

export default OrderDetailsScreen;