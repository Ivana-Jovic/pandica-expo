import { Dispatch } from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, TouchableOpacity } from "react-native";

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
    <View className=" flex flex-col items-center bg-offwhite shadow-md mb-20">
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
          rounded-sm rounded-t-none flex  flex-col items-center"
      >
        <Text className="text-black "> Ubaci u korpu &nbsp;</Text>
        {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg> */}
      </TouchableOpacity>
    </View>
  );
}

export default TicketCardPicture;
