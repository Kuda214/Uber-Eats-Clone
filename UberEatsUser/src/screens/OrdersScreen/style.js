import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    page:{
        flex:1,
        width:'100%',
        paddingTop:50

    },
    row:{
        flexDirection:'row',

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
        marginBottom:10,

    },
    subTitle:{
        fontSize:16,

    }


});

export default styles;