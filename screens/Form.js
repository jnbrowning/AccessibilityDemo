import styles from "../Styles";
import { View, TouchableOpacity, Text, TextInput, Alert } from "react-native";
import Headings from "../components/Headings";
import { useState } from "react";
import { createRef } from "react";
import { AccessibilityInfo, findNodeHandle } from "react-native";

const Forms = ({navigation}) => {

    const [errorCheck, setErrorCheck] = useState(false);

    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')

    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)

    const ref1 = createRef();
    const ref2 = createRef();
    const ref3 = createRef();
    
    // Get Focus on Submit Button Rather Than Header at End of Form
    const submit = createRef();
    const AUTO_FOCUS_DELAY = 500;

    const focusOnElement = (elementRef) => {
        const node = findNodeHandle(elementRef);
        if (!node) {
          return;
        }
        AccessibilityInfo.setAccessibilityFocus(node);
      };

    const focusSubmit = () => {
        focusOnElement(submit.current);
        const timeoutId = setTimeout(() => {
            focusOnElement(submit.current);
          }, AUTO_FOCUS_DELAY);
          return () => {
            clearTimeout(timeoutId);
          };
    };

    //Check Inputs
    async function checkInputs () {
        setErrorCheck(true);
        //GREAT: Set focus on error field in forms
        if (text1 === '') {
            if (text3 === '') {
                setError1(true)
                setError3(true)
                Alert.alert('Alert', 'Please fill in all required fields');
                ref1.current.focus();
            }
            else {
            setError1(true)
            Alert.alert('Alert', 'First Name is a required field');
            ref1.current.focus();
            }
        }
        else if (text3 === '') { 
            setError3(true)
            Alert.alert('Alert', 'Password is a required field');
            ref3.current.focus();
        }
        else {
            Alert.alert('Success', 'Form submitted. Returning to home page',
            [{text: 'OK',
                onPress:()=>(navigation.navigate('Home'))}]);
            ;
        }
    }

    return(
    <View style={styles.container}>

        <Headings headerTitle="Forms"/>

        <View style={styles.inputPair}>
            {/* //GOOD: Include a clear label */}
            <Text>First Name: </Text>
            <TextInput
            style={(error1===false) ? styles.input : styles.inputError}
            ref={ref1}
            //GOOD: Include accessibility label, even with label before
            accessibilityLabel="Enter First Name, required"
            //BAD: Placeholders are super annoying on the screen reader
            placeholder="First Name"
            onChangeText={(text) => setText1(text)}
            value={text1}
            returnKeyType="next"
            onSubmitEditing={() => ref2.current.focus()}
            />
            <Text style={(error1===false) ? styles.inputStar : styles.starError}>*</Text>
        </View>

        <View style={styles.inputPair}>
            <Text>Age: </Text>
            <TextInput
            ref={ref2}
            style={styles.input}
            onChangeText={(text) => setText2(text)}
            value={text2}
            accessibilityLabel="Enter Age using number pad keyboard"
            //keyboards other than default may be bad for accessibility?
            keyboardType="number-pad"
            //make sure to inculde a returnKeyType or you cannot escape the keyboard!
            //honestly this is just necessary accessibility for most users 
            //Apparently you cannot use "Next" for number pad?
            returnKeyType="done"
            onSubmitEditing={() => ref3.current.focus()}
        />
        </View>

        <View style={styles.inputPair}>
            <Text>Password: </Text>
            <TextInput
            ref={ref3}
            style={(error3===false) ? styles.input : styles.inputError}
            accessibilityLabel="Enter Password, required"
            secureTextEntry
            onChangeText={(text) => setText3(text)}
            value={text3}
            returnKeyType="done"
            onSubmitEditing={focusSubmit}
            />
            <Text style={(error3===false) ? styles.inputStar : styles.starError}>*</Text>

        </View>

        <TouchableOpacity 
        style={styles.button}
        
        onPress={checkInputs}>
            <Text 
            ref={submit} 
            style={styles.buttonText}
            accessibilityRole="button"
            >Submit</Text>
        </TouchableOpacity>

    </View>);
}

export default Forms;