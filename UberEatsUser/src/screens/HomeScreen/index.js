import { StyleSheet, FlatList,View } from 'react-native';
import ResturantItem from '../../components/ResturantItem';
import { useState ,  useEffect} from 'react';
import { DataStore } from 'aws-amplify';
import { Restuarant } from '../../models';

export default function HomeScreen() {

  const [resturants, setRestuarants] = useState([]);

  const fetchRestuarants = async () => {
   
    DataStore.query(Restuarant).then(setRestuarants)
  }

  useEffect(()=>{

    fetchRestuarants();
  },[]);

  return (
    <View styles={styles.page}>
      <FlatList
          data={resturants}
          renderItem={({item})=> <ResturantItem resturant={item}/>}>
      </FlatList>
    </View>
 
  );
}

const styles = StyleSheet.create({
  page: {
    padding:10,
  }
});
