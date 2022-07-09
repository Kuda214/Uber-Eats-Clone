import {Text, View, Image,StyleSheet } from 'react-native';
import resturants from '../../../assets/data/restaurants.json';
import styles from './style';
import {Ionicons} from '@expo/vector-icons';
// import DishListItem from '../../components/DishListItem';


const Header = (props) =>{

    const {resturant} = props;
    return(
        <View style={styles.page}>
            <Image source={{uri:resturant.image}} style={styles.image}></Image>

            <View style={styles.container}>
                <Text style={styles.title}>
                    {resturant.name}
                </Text>
                <Text style = {styles.subtitle}>
                    ZAR {resturant.deliveryFee.toFixed(1)} Delivery Fee &#8226; {resturant.minDelivery} {'-'} {resturant.maxDelivery} min
                </Text>
            </View>

            <Text style={styles.menuHeading}>Menu</Text>


        </View>
    );
}

export default Header;