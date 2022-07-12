import {Text, View, Image} from 'react-native';
import { StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

// const order  = orders[0];

const OrderItem = ({order})  => {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        
        {
        order.Restaurant.image &&
        <View style={styles.imageView}>
        <Image source={{uri: order.Restaurant.image}} style={styles.image}/>
        </View>
      }

        <View style={styles.orderInfo}>
          <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
          <Text style={styles.restaurantAddress}>{order.Restaurant.address} </Text>
          <Text style={styles.subTitle}>Delivery Details</Text>
          <Text style={styles.userName}>{order.User.name}</Text>
          <Text style={styles.userAddress}>{order.User.address} </Text>
        </View>

        <View style={styles.statusIcon}>
        <Entypo name= 'check' size={30} color={'#fff'} ></Entypo>

        </View>
      </View>    
    </View>
  );
}

export default OrderItem;

const styles = StyleSheet.create({
  container:{
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imageView:{
    width:80,
    height: 130,
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',

  },
  image:{
    width: 65,
    height: 120,
    marginRight:5,
    borderRadius:10,
  },
  row:{
    backgroundColor:'#f7f5f5',
    flexDirection: 'row',
    borderRadius:10,
    borderColor: '#05a137',
    borderWidth:1,
  },
  orderInfo:
  {
    marginTop:3,
    width:'55%',
  },
  restaurantName:{
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom:3,
  },
  restaurantAddress:{
    fontSize: 15,
    color: '#a3a2a2',
  },
  subTitle:{
    marginTop: 3,
    fontWeight: 'bold',
    fontSize: 15,
  },
  userName:{
    color: '#a3a2a2',
    fontSize: 15,
  },
  userAddress:{
    color: '#a3a2a2',
    fontSize: 15,
  },
  statusIcon:{
    marginLeft:5,
    width:'12%',
    height:131 ,
    backgroundColor:'#05a137',
    justifyContent:'center',
    alignItems:'center',
    color:'#fff',
    borderTopRightRadius:9,
    borderBottomRightRadius:8,
  }

});