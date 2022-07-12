import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    page:{
        width:'100%',
        height: '100%',
        
    },
    deliveryHeader:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',

    },
    orderTime:{
        fontSize: 18,
        fontWeight: 'bold',
        marginRight:20,
    },
    orderDistance:{
        fontSize:18,
        fontWeight:'400',
        marginLeft:20,

    },
    seperator:{
        borderBottomColor: "lightgrey",
        borderBottomWidth:1,
        paddingTop:10,
        marginBottom:5,
    },
    orderDetails:{
        marginLeft:10,
    },
    orderRestaurantName:{
        fontSize:25,
        fontWeight: 'bold',
        marginBottom:5,
        
    },
    orderAddress:{
        color:'grey',
        fontSize: 20,
        marginVertical:5,
        marginLeft:10,
    },
    userAddress:{
        marginVertical:5,
        color:'#000',
        fontSize: 18,
        marginLeft:10,
    },
    orderDishes:{
        fontSize:18,
        margin:20,        
    },
    orderDish:{
        marginVertical:10,
    },
    iconTextRow:{
        flexDirection:'row',
        alignItems:'center'

    },
    acceptButton:
    {
        backgroundColor: 'green',
        alignItems:'center',
        padding:20,
        alignSelf:'center',
        width:'90%',
        bottom:0,
        position:'absolute'

    
    },
    acceptButtonText:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    }






});

export default styles;