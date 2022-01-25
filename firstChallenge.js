import React  from "react";
import { View , Text , StyleSheet } from "react-native";

const myName = "Sahin";

const FirstChallenge = () => {
    return <View>
        <Text style={style.s1}>Welcome To Thapa technical</Text>
        <text style={style.s2}>We Love react native and I am a subscriber of Thapa technical channel</text>
        <Text>Hii, My name is {myName}</Text>



    </View>

};

const style = StyleSheet.create({
    s1 : {
        fontSize : 40,
        fontWeight :"bold",
        color: 'blue'
    },
    s2 : {
        fontSize : 30
    }
});

export default FirstChallenge;
    