import { View, Text, ScrollView } from "react-native";
import React from "react";
import { animals2, events } from "../data";
import SmallCard from "../components/SmallCard";
import { SafeAreaView } from "react-native-safe-area-context";
import BigCard from "../components/BigCard";
import Navbar from "../components/Navbar";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const storeData = async (key, value) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem(key, jsonValue);
//   } catch (e) {
//     // saving error
//   }
// };

// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem("@storage_Key");
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (e) {
//     // error reading value
//   }
// };

export default function Home() {
  //   const [newPage, setNewPage] = useState<number>(1);
  //   if (AsyncStorage..length === 0) {
  //     localStorage.setItem("animals", JSON.stringify(animals2));
  //     localStorage.setItem("events", JSON.stringify(events));
  //     localStorage.setItem("users", JSON.stringify(users));
  //     localStorage.setItem(
  //       "notificationAdmin",
  //       JSON.stringify(["a:notAdmin1", "a:notAdmin2"])
  //     );
  //   }
  //   const { user } = useContext(AuthContext);
  //   if (user?.username === "admin") return <ErrorPage />;

  //   const animals: animalInfo[] = JSON.parse(
  //     localStorage.getItem("animals") + ""
  //   );
  // storeData("animals",animals2);
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
    <SafeAreaView className=" bg-darkGreen">
      <Navbar />
      <ScrollView className="bg-lightGreen flex flex-col pt-5  space-y-4 w-full ">
        <View
          className="flex flex-wrap flex-row
          justify-center gap-7
          "
        >
          {animals2.map((animal: any) => {
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
