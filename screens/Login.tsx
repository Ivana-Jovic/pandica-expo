import { Text, View } from "react-native";
import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export class Login extends Component {
  render() {
    return (
      <SafeAreaView className=" bg-darkGreen grow">
        <Navbar />
        <ScrollView className=" bg-lightGreen ">
          <Text>Login</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Login;
