import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
    resturantContainer: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding:12,
    },
    image:{
      width:'100%',
      aspectRatio: 5 / 3,
      marginVertical:5,
    },
    title:{
      fontSize:16,
      fontWeight:'500',
      marginVertical:5,
    },
    subtitle:{
      color: 'grey',
    },
    row :
    {
        flexDirection:'row',
        alignItems:'center', //vertical centering
    },
    rating:{
        marginLeft:'auto',
        backgroundColor:'lightgrey',
        padding:5,
        width:27,
        height: 27,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    }
  });
  

export default styles;