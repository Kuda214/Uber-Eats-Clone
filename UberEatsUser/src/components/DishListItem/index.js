import {Text, View, Image } from 'react-native';
import styles from './style';

const DishListItem = (props) =>{

    const {name, price, description,image} = props.dish;

    return(
        <View style={styles.dishContainer}>
            <View style={styles.dishInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description} numberOfLines={2}>{description}</Text>
                <Text style={styles.price}>R{price}</Text>
            </View>

            {image  && (<Image source={{uri:image}} style={styles.dishImage} />)}
        </View>
            
    );
}

export default DishListItem;
