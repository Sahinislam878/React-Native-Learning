
import React from 'react';
import { render } from 'react-dom';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const FlatDemo  = () => {
const names = [
    {
        name: "Sahin"
    },
    {
        name: "sayak"
    },
    {
        name: "Jeet"
    },
    {
        name: "Suman"
    },
    {
        name: "Kaustav"
    },

    
]
    return(
        <FlatList 
        data={names} 
        renderItem={(element) =>{
             console.log(element.item.name);

             return <Text style = {styles.textStyle} >{element.item.name}</Text>

        }} />
    );
    
}


const styles = StyleSheet.create({
    textStyle : {
        fontSize : 40,
    }
})

export default FlatDemo;
