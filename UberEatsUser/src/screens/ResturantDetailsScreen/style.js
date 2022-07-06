 import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    iconContainer:{
        top:40,
        left:10,
        borderRadius:50,
        position:'absolute',
    },
    image:{
        width:'100%',
        aspectRatio:6/3,
        resizeMode:'cover',
    },
    container:
    {
        margin:10,
        borderBottomColor: 'lightgrey',
        borderBottomWidth:1,
        paddingBottom:20
    },
    title:{
        fontSize:30,
        fontWeight:'600',
        
    },
    subtitle:{
        marginVertical:5,
        color:"#525252",
        fontSize:16,
    },
    menuHeading:
    {
        fontSize:17,
        paddingLeft:25,

    }

});

export default styles;