import {Text, View, Image, FlatList,StyleSheet } from 'react-native';
import resturants from '../../../assets/data/restaurants.json';
import styles from './style';
import {Ionicons} from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import Header from './Header.js';

const resturant = resturants[0];

const ResturantDetailsScreen = (props) =>{
    return(
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header resturant={resturant}/>}
                data={resturant.dishes}
                renderItem={({item,index})=> <DishListItem key={index} dish={item}/>} 
            />
            
            <Ionicons
                name='arrow-back-circle'
                size={35}
                color='#fff'
                style={styles.iconContainer}
            ></Ionicons>

        </View>
    );
}



export default ResturantDetailsScreen;