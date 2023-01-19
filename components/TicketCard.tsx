import { Dispatch } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Cart from "../assets/icons/cart.svg";

function TicketCard({
  title,
  description,
  price,
  setSelectedItemTitle,
  setSelectedItemPrice,
}: {
  title: string;
  description: string;
  price: number;
  setSelectedItemTitle: Dispatch<React.SetStateAction<string>>;
  setSelectedItemPrice: Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <View className="flex flex-col items-center bg-offwhite mb-10">
      <View className="mt-5 flex flex-col items-center ">
        <Text className="font-semibold text-xl">{title}</Text>
        <Text className="mt-5">{description}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setSelectedItemTitle(title);
          setSelectedItemPrice(price);
        }}
        className="p-3 w-full mt-5  bg-darkGreen 
        rounded-sm rounded-t-none flex flex-row  justify-center"
      >
        <Text> Ubaci u korpu &nbsp;</Text>
        <Cart />
      </TouchableOpacity>
    </View>
  );
}

export default TicketCard;
