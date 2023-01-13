import { View, Text } from "react-native";
import React from "react";
import { animals2, events } from "../data";
import SmallCard from "../components/SmallCard";
import { SafeAreaView } from "react-native-safe-area-context";
import BigCard from "../components/BigCard";
export default function Home() {
  return (
    // <View className="flex-1 items-center justify-center bg-red-500">
    //   <Text>Home</Text>
    //   <View>
    //     {animals2.map((animal: any) => {
    //       return (
    //         <View key={animal.name} className="">
    //           <Text>{animal.name}</Text>
    //           {/* <SmallCard name={animal.name} image={animal.image} /> */}
    //         </View>
    //       );
    //     })}
    //   </View>
    // </View>
    <SafeAreaView className=" bg-red-500 ">
      <View className="  ">
        <View
          className="flex flex-col w-full  content-center gap-4
          flex-wrap bg-green-300"
        >
          {animals2.map((animal: any) => {
            return (
              <View key={animal.name} className="">
                <SmallCard name={animal.name} image={animal.image} />
              </View>
            );
          })}
        </View>
        {/* </View> */}

        <View className="flex flex-wrap  max-w-7xl gap-7 mx-auto justify-center my-7">
          {events.map((event: any) => {
            return (
              <View key={event.title} className="">
                <Text>Hi</Text>
                {/* <BigCard
                  title={event.title}
                  description={event.description}
                  likes={event.likes}
                  image={event.image}
                  whoLiked={event.whoLiked}
                /> */}
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}
