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
        aspectRatio:4/3,
        resizeMode:'cover',
        
    },

    title:{
        fontSize:28,
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

    },
    headingContainer:{
        marginTop:0,
    },
    container:{
        padding:10,
    },
    pageTitle:{
        fontSize:25,
        fontWeight:'bold',

    }

});

export default styles;