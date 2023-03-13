import styles from "../Styles";
import { View, Button, TouchableOpacity, Text, Image } from "react-native";
import { useState } from "react";
import Headings from "../components/Headings";

const Imgs = () => {

    const [helloText, updateText] = useState("hello");

    return(
    <View style={styles.container}>

        {/* BAD: we should try to break images like these up into smaller chunks;
        also we should try to include the text as separate pieces if possible so that it is easier to navigate */}
        <Headings headerTitle="Images"/>
        <Image 
            alt="infographic"
            style={styles.infographic}
            source={{
              uri: 'https://www.do1thing.com/wp-content/uploads/2021/03/buy-72-hour-water.png',
            }}
        />

    </View>);
}

export default Imgs;