import {Text, View} from 'react-native';
import styles from './style';


const Header = ({o}) => {
    return(
        
        <View style={styles.headerContainer}>
            <Text style={styles.headerUserStatus}>You're Online</Text>
            <Text style={styles.headerSubtitle}>Available Nearby Order: {o.length}</Text>
        </View>
        
    );
}

export default Header;
