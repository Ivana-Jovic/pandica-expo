import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { animalInfo } from "../data";

function SmallCard({ animal }: { animal: animalInfo }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate("Animal", { animal: JSON.stringify(animal) });
        navigation.navigate("Animal", {
          animalName: JSON.stringify(animal.name),
        });
      }}
      className="w-36 bg-white  rounded-sm"
    >
      <Image source={animal.image} alt="" className="h-20 w-36 object-cover" />
      <Text className="text-center p-1">{animal.name}</Text>
    </TouchableOpacity>
  );
}

export default SmallCard;
