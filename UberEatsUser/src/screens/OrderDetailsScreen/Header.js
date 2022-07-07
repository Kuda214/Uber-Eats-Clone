import {Text, View, Image,StyleSheet } from 'react-native';
import styles from './style';
// import DishListItem from '../../components/DishListItem';
import orders from '../../../assets/data/orders.json'

const order = orders[0];

const Header = (props) =>{

    const {resturant} = props;
    return(
        <View style={styles.headingContainer}>
            <Image source={{uri:order.Restaurant.image}} style={styles.image}></Image>

            <View style={styles.container}>
                <Text style={styles.title}>
                    {order.Restaurant.name}
                </Text>
                <Text style={styles.subtitle}>
                    {order.status} &#8226; {order.updatedAt}
                </Text>
                
                <Text style={styles.pageTitle}>Your Order</Text>
            </View>


        </View>
    );
}

export default Header;