import React from "react";
import { Text, StyleSheet } from "react-native";
import { View } from "react-native-web";

const myName = "Sahin";

const FirstChallenge = () => {
    const myName = "Sahin";
    return ( 
        <View>
            <Text style={Style.StyleOne}> WelCome to Thapa technical</Text>
            <Text style={Style.styleTwo}>We love React native and I am a subscriber of Thapa technical Channel</Text>
            <Text>My name is {myName}</Text>
        </View>
    );
};
const Style = StyleSheet.create({
    StyleOne : {
        color : 'red',
        fontWeight : 'bold',
        fontSize : 40
    },
    styleTwo : {
        fontSize : 30
    }
})

export default FirstChallenge;