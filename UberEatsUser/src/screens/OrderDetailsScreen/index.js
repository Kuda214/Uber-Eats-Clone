import { Text,View,FlatList } from "react-native";
import orders from '../../../assets/data/orders.json';
import Header from "./Header";
import styles from "./style";
import restuarants from '../../../assets/data/restaurants.json';
import ItemOrder from "../../components/ItemOrder";
import { userOrderContext } from '../../contexts/OrderContext';
import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

const OrderDetailsScreen = ({id}) => {
    const {getOrder} = userOrderContext();
    const [order, setOrder] = useState();
    const route = useRoute();
    // const id = route.params?.id;
    

    useEffect(() =>{
        getOrder(id).then(setOrder);
    },[])
    
    if(!order)
    {
        return <ActivityIndicator size={24} color={"grey"}></ActivityIndicator>
    }
    return(
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header order={order}/>}
                data={order.dishes}
                renderItem={({item}) => <ItemOrder order={item}
                keyExtractor={(item) => item.name}/>}
            >

            </FlatList>
        </View>
    );

}

export default OrderDetailsScreen;