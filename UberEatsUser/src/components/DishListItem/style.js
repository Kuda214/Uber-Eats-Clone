import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    dishContainer:{
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
        paddingVertical:20,
        width:'85%',
        alignSelf:'center',
        flexDirection:'row',
    },
    name:{
        fontSize:16,
        fontWeight:"600",
        letterSpacing:0.5,
    },
    description:{
        color:'grey',
        marginVertical:5,
    },
    price:{
        fontSize:16,

    },
    dishInfo:{
        flex:1,
    },
    dishImage:{
        height: 90,
        aspectRatio:1,
    }
});

export default styles;
