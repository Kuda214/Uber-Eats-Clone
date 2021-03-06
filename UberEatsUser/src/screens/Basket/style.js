import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#fff',
        width:'100%',
    },
    name:{
        
        fontSize:28,
        fontWeight:'600',
        marginVertical:10,
    
    },
    subTitle:{
        fontWeight:'bold',
        fontSize:19,
        marginTop:20,
    }
    ,
    description:{
        color:"#696969",
        fontSize:16,
    },
    dishInfo:{
        margin:30,
    },
    horizontalSeperator:{
        height:1,
        backgroundColor:'lightgrey',
        marginVertical:12,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8,
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