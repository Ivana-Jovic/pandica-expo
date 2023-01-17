import { Text, View } from "react-native";
import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import { useContext, useState } from "react";
import { AuthContext } from "../authContext";
import Register from "../components/Register";
import { TouchableOpacity } from "react-native";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [issignin, setssignin] = useState<boolean>(true);

  const { user, signin, signout } = useContext(AuthContext);

  const handleClose = () => {
    // setPopupOpen(false);
  };

  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />
      <ScrollView className=" bg-lightGreen ">
        <Text>Login</Text>
        {/* {!issignin && ( */}
        <View className="">
          <Register inPopup={true} action={() => handleClose()} />
          <TouchableOpacity
            className="cursor-pointer"
            onPress={() => setssignin(!issignin)}
          >
            <Text className="text-center">Imate nalog? Prijavite se...</Text>
          </TouchableOpacity>
        </View>
        {/* )} */}
        {/* {issignin && (
          <View className="grid grid-cols-2 items-center gap-5 mt-10 mr-10">
            <label className="">Korisnicko ime</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="textarea w-full rounded-sm "
            />
            <label className="">Lozinka</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="textarea w-full rounded-sm "
            />
            <TouchableOpacity
              onPress={() => {
                if (signin(username, password)) {
                  setPopupOpen(false);
                  setUsername("");
                  setPassword("");
                  if (username === "admin" && password === "123")
                    navigate("/WorkerHome");
                  else navigate("/");
                }
              }}
              className="col-span-2 justify-self-center
                my-5 btn border-none w-48 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md"
            >
              Prijavi se
            </TouchableOpacity>{" "}
            <TouchableOpacity
              onPress={() => setssignin(!issignin)}
              className="col-span-2 justify-self-center cursor-pointer"
            >
              Nemate nalog? Registrujte se...
            </TouchableOpacity>
          </View>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
}
