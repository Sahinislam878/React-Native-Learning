//import libraries to create componets
import react from "react";

import { Text, StyleSheet } from 'react-native'
// Create a component that return some jsx / simple function

const CustomComponent = () => {
  return <Text style={style.textStyle}> Hello World !! This is my  Custom Components 
  </Text>
};

//Create a StyleSheet to Style the components


const style = StyleSheet.create({
  textStyle :{
    color: "red",
  },
});

//Export the file, so that we can use it elsewhere in our app

export default CustomComponent;




