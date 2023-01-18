import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { animalInfo } from "../data";

function SmallCard({ animal }: { animal: animalInfo }) {
  const navigation = useNavigation();
  const img: string = "../assets" + animal.image + "";
  return (
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate("Animal", { animal: JSON.stringify(animal) });
        navigation.navigate("Animal", {
          animalName: JSON.stringify(animal.name),
        });
      }}
      className=" cursor-pointer  w-36 bg-white shadow-xl rounded-sm"
    >
      <Image source={animal.image} alt="" className="h-20 w-36 object-cover" />
      <View className="w-full ">
        <Text className="w-full text-center">{animal.name}</Text>
        <Text className="w-full text-center">{animal.comments.length}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SmallCard;
