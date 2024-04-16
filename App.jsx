import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";

const App = () => {
  return (
    // <NavigationContainer>
    //   <Text>App</Text>
    // </NavigationContainer>
    <>
      <StackNavigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
