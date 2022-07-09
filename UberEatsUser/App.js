import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';
import HomeTabs from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';
import AuthContextProvider from './src/contexts/AuthContext'

Amplify.configure({...config,Analytics:{disabled:true}});

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
        <StatusBar style='light'/>
      </AuthContextProvider>
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


export default withAuthenticator(App);