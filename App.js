//import libraries to create componets
import react from "react";
import CustomComponent from "./src/screens/CustomComponent";

import FirstChallenge from "./src/screens/firstChallenge";

import { Text, StyleSheet , View } from 'react-native'
import FlatDemo from "./src/screens/FlatDemo";

// Create a component that return some jsx / simple function
const myName = "Sahin"
const myElement = <Text> Hello World  {myName}</Text>
const getFullName = (firstName, lastName) => {
  return `My name is ${firstName} ${lastName}`;
};

const App = () => {
  return (
  <View> 
  {/* <Text style={style.textStyle}> Hello World  {myName}</Text>
  <CustomComponent />
  {myElement}
  <Text> Hii, {getFullName("Sahin", "Islam")} </Text> */}

    {/* <FirstChallenge/> */}
              {/* FlatListDemo  L= 9*/}
    <FlatDemo />
 
  </View>
  );
};

//Create a StyleSheet to Style the components


// const style = StyleSheet.create({
//   textStyle :{
//     color: "red",
//     marginTop: 100,
//   }

// });

//Export the file, so that we can use it elsewhere in our app

export default App;












