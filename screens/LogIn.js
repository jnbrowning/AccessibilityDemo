import { FontAwesome5 } from '@expo/vector-icons'; 
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Headings from '../components/Headings';
import styles from '../Styles';

function LogIn ({navigation}) {

    const logIn = () => {
      navigation.navigate('User'); 
    }

    return (
      <View style={styles.container}>
        <Image 
          alt="logo"
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Headings headerTitle="Log In" />
        <Text>Welcome!</Text>
        <TouchableOpacity
            style={styles.button}
            accessibilityRole='button'
            onPress={logIn}
        >
          <Text
          style={styles.buttonText}
          >Log In</Text>
        </TouchableOpacity>
      </View>
    )
}

export default LogIn;