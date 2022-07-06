import { StyleSheet, FlatList } from 'react-native';
import ResturantItem from '../../components/ResturantItem';
import resturants from '../../../assets/data/restaurants.json'

export default function HomeScreen() {
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
