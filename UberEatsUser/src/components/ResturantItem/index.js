import {Text, View, Image, Pressable } from 'react-native';
import styles from './style';
import {useNavigation } from '@react-navigation/native';

const defaultImg = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";

const ResturantItem = ({resturant}) =>{
    // const {name, deliveryFee, minDeliveryTime,maxDeliveryTime,image,rating} = props.resturant; //rating and dishes missing
    
    const navigation = useNavigation();

    const onPress = () => {
      navigation.navigate("Restuarant", {id: resturant.id});
    }

    return(
    <Pressable  onPress={onPress} style={styles.resturantContainer}>
      <Image 
        source={{uri:resturant.image.startsWith('http') ? resturant.image : defaultImg}} 
        style={styles.image}
      />
      
      <View style={styles.row}>  
        <View style={styles.resturantInfo}>
        <Text style = {styles.title}>{resturant.name}</Text>
        
        <Text style = {styles.subtitle}>
            ZAR {resturant.deliveryFee.toFixed(1)} Delivery Fee &#8226; {resturant.minDelivery} {'-'} {resturant.maxDelivery} min
        </Text>
        
        </View>

        <View style={styles.rating}>
            <Text>{resturant.rating.toFixed(1)}</Text>
        </View>
    </View>

    </Pressable>
  );
}

export default ResturantItem;