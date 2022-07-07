import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    page:{
        flex:1,
        justifyContent:'center',
    },
    row:{
        flexDirection:'row',
        marginVertical:10,
    },
    image:{
        width:80,
        height:80,
        marginHorizontal:5,

    },
    resturantInfo:{
        justifyContent:'flex-start',
    },
    resturantName:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:14,

    },
    subTitle:{
        fontSize:16,
        paddingBottom:8

    }


});

export default styles;