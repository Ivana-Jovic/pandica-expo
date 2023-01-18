import { View, Text, ScrollView } from "react-native";
import React from "react";
import { animalInfo, animals2, events, users } from "../data";
import SmallCard from "../components/SmallCard";
import { SafeAreaView } from "react-native-safe-area-context";
import BigCard from "../components/BigCard";
import Navbar from "../components/Navbar";
import { getData, storeData } from "../helperFunctions";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, Dispatch, useEffect, useState } from "react";

export default function Home() {
  const [animals, setAnimals] = useState<animalInfo[]>(animals2);

  getData("users").then((item) => {
    if (item) {
      // do the damage
    }
    {
      storeData("animals", JSON.stringify(animals2));
      storeData("events", JSON.stringify(events));
      storeData("users", JSON.stringify(users));
      storeData("currUser", JSON.stringify([]));
      // storeData(
      //   "notificationAdmin",
      //   JSON.stringify(["a:notAdmin1", "a:notAdmin2"])
      // );
    }
  });

  //   const { user } = useContext(AuthContext);
  //   if (user?.username === "admin") return <ErrorPage />;
  // const animalString = await getData("animals");
  // const animals: animalInfo[] = JSON.parse(animalString);

  // storeData("animals",animals2);
  // useEffect(() => {
  //   getData("animals").then((animalString) => {
  //     setAnimals(JSON.parse(animalString));
  //   });
  // }, []);
  // getData("animals").then((animalString) => {
  //   setAnimals(JSON.parse(animalString));
  // });
  return (
    <SafeAreaView className=" bg-darkGreen">
      <Navbar />
      <ScrollView className="bg-lightGreen flex flex-col pt-5  space-y-4 w-full ">
        <View
          className="flex flex-wrap flex-row
          justify-center gap-7
          "
        >
          {animals.map((animal: any) => {
            return (
              <View key={animal.name} className="">
                <SmallCard animal={animal} />
              </View>
            );
          })}
        </View>
        {/* </View> */}

        <View
          className=" flex flex-col content-center gap-7 px-12
          "
        >
          {events.map((event: any) => {
            return (
              <View key={event.title} className="">
                {/* <Text>Hi</Text> */}
                <BigCard
                  title={event.title}
                  description={event.description}
                  likes={event.likes}
                  image={event.image}
                  whoLiked={event.whoLiked}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
