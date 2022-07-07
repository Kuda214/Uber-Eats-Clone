import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8,
        margin:15,
    },
    quantity:{
        fontSize:30,
        marginHorizontal:20,
        fontWeight:'500',
    },
    button:
    {
        backgroundColor:"#000",
        bottom:10,
        position:'absolute',
        width:'95%',
        alignItems:'center',
        color:'#fff',
        padding:20,
        alignSelf:'center',
    },
    buttonText:{
        fontSize:20,
        fontWeight:'600',
        color:"#fff",
    },
    tprice:{
        marginLeft:'auto',
    },
    quantityContainer:{
        backgroundColor: 'lightgrey',
        paddingHorizontal:5,
        marginRight:5,
        borderRadius:3,
        paddingVertical:5,
    },
    ItemName:{
        fontSize:14,
        fontWeight:'600',
    }

});

export default styles;