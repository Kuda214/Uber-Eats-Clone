import { StyleSheet, Text, View, FlatList } from 'react-native';
import orders from './assets/data/orders.json';
import OrderScreen from './screens/OrderScreen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Navigation />
        </GestureHandlerRootView>
        <StatusBar style="light"/>
      </NavigationContainer>

    

  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
