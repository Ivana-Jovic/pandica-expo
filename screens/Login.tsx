import { Text, View } from "react-native";
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
import Button from "../components/Button";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [issignin, setssignin] = useState<boolean>(true);
  const { signin } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />
      <ScrollView className=" bg-lightGreen ">
        {!issignin && (
          <View>
            <Register inPopup={true} />
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

            <Button
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
              text={"Prijavi se"}
            />
            <TouchableOpacity onPress={() => setssignin(!issignin)}>
              <Text className="mt-7">Nemate nalog? Registrujte se...</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
