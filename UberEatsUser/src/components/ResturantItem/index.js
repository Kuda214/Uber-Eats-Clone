import {Text, View, Image } from 'react-native';
import styles from './style';

const ResturantItem = (props) =>{
    const {name, deliveryFee, minDeliveryTime,maxDeliveryTime,image,rating} = props.resturant; //rating and dishes missing
  return(
    <View style={styles.resturantContainer}>
      <Image 
        source={{uri:image}} 
        style={styles.image}
      />
      
      <View style={styles.row}>  
        <View style={styles.resturantInfo}>
        <Text style = {styles.title}>{name}</Text>
        
        <Text style = {styles.subtitle}>
            ZAR {deliveryFee} Delivery Fee &#8226; {minDeliveryTime} {'-'} {maxDeliveryTime} min
        </Text>
        
        </View>

        <View style={styles.rating}>
            <Text>{rating}</Text>
        </View>
    </View>

    </View>
  );
}

export default ResturantItem;