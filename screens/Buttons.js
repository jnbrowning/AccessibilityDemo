import styles from "../Styles";
import { View, Button, TouchableOpacity, Text, Image, Pressable } from "react-native";
import Headings from "../components/Headings";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

function Buttons ({navigation}) {

    return(
    <View style={styles.container}>

        {/* GOOD: Since this has text that says "back" and the accessibility role set to button
        the screen reader will read, "back, button" */}
        <TouchableOpacity
        accessibilityRole="button"
        onPress={()=>{navigation.goBack()}}
        style={styles.backButton}>
            <Ionicons name="md-chevron-back" size={16} color="#492C7A" /> 
            <Text style={{color: "#492C7A"}}>back</Text>
        </TouchableOpacity>

        {/* GOOD: Includes no text, but has accessibility role and accessibility label */}
        <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="back"
        onPress={()=>{navigation.goBack()}}
        style={styles.backButton}>
            <Ionicons name="md-chevron-back" size={16} color="#492C7A" /> 
        </TouchableOpacity>

        {/* BAD: With no accessibility role and no text, nothing is read out */}
        <TouchableOpacity
        onPress={()=>{navigation.goBack()}}
        style={styles.backButton}>
            <Ionicons name="md-chevron-back" size={16} color="#492C7A" /> 
        </TouchableOpacity>

        <Headings headerTitle="Buttons" />

        {/* GOOD: Title and accessibility role needed */}
        <Button
            accessibilityRole="button"
            title="Submit"
        />

        {/* GOOD: Text label and accessibility role */}
        <TouchableOpacity
            accessibilityRole="button"
            style={styles.button}>
            <Text
            style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        {/* BAD: Does not have any label, alt text, or accessibility role
        nothing will be read out */}
        <Text>Click React Logo</Text>
        <TouchableOpacity onPress={()=>console.log('react')}>
        <Image 
        style={styles.tinyLogo}
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        </TouchableOpacity>

        {/* Better, but alt text should match description from text, i.e. "react logo" */}
        <TouchableOpacity onPress={()=>console.log('react')}
        accessibilityRole="button"
        >
        <Image 
        alt="icon of atom"
        style={styles.tinyLogo}
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        </TouchableOpacity>

        {/* Great, includes role and alt text, and text matches the description of what to do "react logo" vs "icon" or some variation */}
        {/* Note: if you include accessibilityLabel and alt, the accessibilityLabel is what will be read */}
        <TouchableOpacity 
        onPress={()=>console.log('react')}
        accessibilityRole="button"
        >
        <Image 
        alt='react logo'
        style={styles.tinyLogo}
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        </TouchableOpacity>

    </View>);
}

export default Buttons;