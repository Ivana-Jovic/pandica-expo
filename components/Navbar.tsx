import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Burger from "../assets/icons/burger.svg";
function Navbar() {
  const navigation = useNavigation();
  return (
    <View className="bg-darkGreen flex flex-row items-center px-4 pb-3 justify-between">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Pocetna");
        }}
        className="pt-2"
      >
        <Image
          source={require("../assets/images/logo.png")}
          alt=""
          className="h-8 w-8 object-cover"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()} className="">
        <Burger />
      </TouchableOpacity>
    </View>
  );
}
export default Navbar;
