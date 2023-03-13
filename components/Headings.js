import { Text } from "react-native";
import styles from "../Styles";
import { createRef } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { AccessibilityInfo, findNodeHandle } from "react-native";
import React from "react";

const Headings = (props) => {

    const {headerTitle} = props;

    // *********Header Focus*********
    // This allows for the header to take focus, even if it is not the first element in the DOM
    const inputRef = createRef();
    const AUTO_FOCUS_DELAY = 500;

    const focusOnElement = (elementRef) => {
        const node = findNodeHandle(elementRef);
        if (!node) {
          return;
        }
        AccessibilityInfo.setAccessibilityFocus(node);
      };

    useFocusEffect (
      React.useCallback(() => {
        console.log('hi');
        focusOnElement(inputRef.current);

        const timeoutId = setTimeout(() => {
            focusOnElement(inputRef.current);
          }, AUTO_FOCUS_DELAY);
          return () => {
            clearTimeout(timeoutId);
          };
        }, [])
    );
    // *********End Header Focus*********

    return (
        <Text 
        style={styles.heading}
        accessibilityRole="header"
        ref={inputRef}
        >{headerTitle}</Text>
    );
}

export default Headings;