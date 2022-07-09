import {Text, View, Image, Pressable } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({dish}) =>{
    const navigation = useNavigation();
    // const {name, price, description,image} = props.dish;

    return(
        <Pressable style={styles.dishContainer} onPress={() => navigation.navigate('Dish', {id: dish.id})}>
            <View style={styles.dishInfo}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
                <Text style={styles.price}>R{dish.price.toFixed(1)}</Text>
            </View>

            {dish.image  && (<Image source={{uri:dish.image}} style={styles.dishImage} />)}
        </Pressable>
            
    );
}

export default DishListItem;
