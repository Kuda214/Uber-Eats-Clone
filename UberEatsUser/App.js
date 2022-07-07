import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ResturantDetailsScreen from './src/screens/ResturantDetailsScreen';
import DishDetailedScreen from './src/screens/DishItemDetailedScreen';
import Basket from './src/screens/Basket';
import OrderScreen  from './src/screens/OrdersScreen';
import OrderDetailsScreen from './src/screens/OrderDetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';
import HomeTabs from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
          {/* <RootNavigator /> */}
          <HomeTabs/>
          <StatusBar style='light'/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
