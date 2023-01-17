// import { useNavigate } from "react-router-dom";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { animalInfo } from "../data";
// import myImage from "/images/zebra.jpg";
// const PlaceholderImage = require("../assets/images/zebra.jpg");
function SmallCard({ animal }: { animal: animalInfo }) {
  const navigation = useNavigation();
  const img: string = "../assets" + animal.image + "";
  return (
    <TouchableOpacity
      // onPress={() => navigate(`/animal/${name}`)}
      onPress={() => {
        navigation.navigate("Animal", { animal: JSON.stringify(animal) });
      }}
      className=" cursor-pointer  w-36 bg-white shadow-xl rounded-sm"
    >
      <Image
        source={require("../assets" + "/images/sumskiris.jpg" + "")}
        alt=""
        className="h-20 w-36 object-cover"
      />
      <View className="w-full ">
        <Text className="w-full text-center">{animal.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SmallCard;
