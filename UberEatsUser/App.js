import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ResturantDetailsScreen from './src/screens/ResturantDetailsScreen';
import DishDetailedScreen from './src/screens/DishItemDetailedScreen';
import Basket from './src/screens/Basket';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <ResturantDetailsScreen/> */}
        <Basket/>
        <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
});
