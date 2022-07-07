import {Text, View, Image, FlatList,StyleSheet } from 'react-native';
import resturants from '../../../assets/data/restaurants.json';
import styles from './style';
import {Ionicons} from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import Header from './Header.js';
import {useRoute,useNavigation } from '@react-navigation/native'

const resturant = resturants[0];

const ResturantDetailsScreen = (props) =>{
    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;
    console.warn(id);



    return(
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header resturant={resturant}/>}
                data={resturant.dishes}
                renderItem={({item,index})=> <DishListItem dish={item}
                keyExtractor={(item) => item.name} />} 
            />
            
            <Ionicons
                name='arrow-back-circle'
                size={35}
                color='#fff'
                style={styles.iconContainer}
                onPress={()=> navigation.goBack()}
            ></Ionicons>

        </View>
    );
}



export default ResturantDetailsScreen;