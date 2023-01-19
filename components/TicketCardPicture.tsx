import { Dispatch } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Cart from "../assets/icons/cart.svg";

function TicketCardPicture({
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
    <View className=" flex flex-col items-center bg-offwhite mb-20">
      <View className="w-full ">
        <Image
          source={require("../assets/images/panda.jpg")}
          alt=""
          className="absolute opacity-10 object-cover h-40"
        />
      </View>
      <View className="mt-5 p-3 flex flex-col items-center ">
        <Text className="font-semibold text-xl ">{title}</Text>
        <Text className="mt-5 text-center">{description}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setSelectedItemTitle(title);
          setSelectedItemPrice(price);
        }}
        className="-mb-10 p-3 w-full mt-5  bg-darkGreen 
          rounded-sm rounded-t-none flex-row   justify-center"
      >
        <Text> Ubaci u korpu &nbsp;</Text>
        <Cart />
      </TouchableOpacity>
    </View>
  );
}

export default TicketCardPicture;
