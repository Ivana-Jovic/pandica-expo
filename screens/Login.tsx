import { Text, View } from "react-native";
import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import { useContext, useState } from "react";
import { AuthContext } from "../authContext";
import Register from "../components/Register";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [issignin, setssignin] = useState<boolean>(true);

  const { user, signin, signout } = useContext(AuthContext);
  const navigation = useNavigation();
  const handleClose = () => {
    // setPopupOpen(false);
  };

  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />
      <ScrollView className=" bg-lightGreen ">
        {!issignin && (
          <View className="">
            <Register inPopup={true} action={() => handleClose()} />
            <TouchableOpacity
              className="cursor-pointer"
              onPress={() => setssignin(!issignin)}
            >
              <Text className="text-center">Imate nalog? Prijavite se...</Text>
            </TouchableOpacity>
          </View>
        )}
        {issignin && (
          <View className="flex items-center space-y-4 mt-10">
            <View className="flex flex-row items-center">
              <Text className="w-32">Korisnicko ime</Text>
              <TextInput
                value={username}
                onChangeText={setUsername}
                className="bg-white w-32"
              />
            </View>
            <View className="flex flex-row items-center mb-10">
              <Text className="w-32">Lozinka</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                className="bg-white w-32"
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                signin(username, password).then((res) => {
                  if (res) {
                    // setPopupOpen(false);
                    setUsername("");
                    setPassword("");
                    navigation.navigate("Pocetna");
                    console.log("SIGN IN");
                  } else {
                    console.log("NOT SIGN IN");
                    Toast.show({
                      type: "error",
                      text1: "PRIJAVA NIJE USPELA",
                    });
                  }
                });

                // if (signin(username, password)) {
                //   setUsername("");
                //   setPassword("");
                //   navigation.navigate("Pocetna");
                //   console.log("SIGN IN");
                // } else {
                //   console.log("NOT SIGN IN");
                //   Toast.show({
                //     type: "error",
                //     text1: "PRIJAVA NIJE USPELA",
                //   });
                // }
              }}
              className="p-3 w-48 bg-offwhite shadow-m rounded-md"
            >
              <Text className="text-center uppercase font-semibold">
                Prijavi se
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setssignin(!issignin)}
              className=" "
            >
              <Text className="mt-7">Nemate nalog? Registrujte se...</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
