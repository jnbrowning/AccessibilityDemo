import { FontAwesome5 } from '@expo/vector-icons'; 
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Headings from '../components/Headings';

import styles from '../Styles';

function HomePage ({navigation}) {

    const logOut = () => {
        navigation.navigate('LogIn'); 
      }

    return (
      <View style={styles.container}>
        <Headings headerTitle="Home"/>
        <Text>Let's learn about accessibility</Text>
        <TouchableOpacity
          style={styles.button}
            accessibilityRole='button'
            onPress={logOut}
        >
            <Text
            style={styles.buttonText}
            >Log Out</Text>
        </TouchableOpacity>

      </View>
    )
}

export default HomePage;