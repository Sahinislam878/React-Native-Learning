//import libraries to create componets
import react from "react";
import CustomComponent from "./src/screens/CustomComponent";

import { Text, StyleSheet , View } from 'react-native'

// Create a component that return some jsx / simple function
const myName = "Sahin"
const myElement = <Text> Hello World  {myName}</Text>
const getFullName = (firstName, lastName) => {
  return `My name is ${firstName} ${lastName}`;
};

const App = () => {
  return (
  <View> 
  <Text style={style.textStyle}> Hello World  {myName}</Text>
  <CustomComponent />
  {myElement}
  <Text> Hii, {getFullName("Sahin", "Islam")} </Text>


  <Text style = {style.s1}>Welcome To Sahin </Text>
  </View>
  )
};

//Create a StyleSheet to Style the components


const style = StyleSheet.create({
  textStyle :{
    color: "red",
    marginTop: 100,
  },
  s1 : {
   fontSize: 40, fontWeight : "bold"
    
  }
});

//Export the file, so that we can use it elsewhere in our app

export default App;





















// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
