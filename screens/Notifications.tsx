import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../authContext";
import Navbar from "../components/Navbar";
import ErrorPage from "./ErrorPage";
function Notifications() {
  const { user } = useContext(AuthContext);
  if (!user) return <ErrorPage />;

  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />

      <ScrollView className=" flex flex-col bg-lightGreen">
        <Text className="my-5 text-2xl font-semibold text-center">
          Moja obaveštenja
        </Text>
        <View className="mx-10 flex space-y-3 justify-center ">
          <View className=" p-3  rounded-sm  bg-white w-full">
            <Text className="  text-left">Obavestenje 1</Text>
          </View>
          <View className="p-3  rounded-sm  bg-white w-full">
            <Text className="  text-left">Obavestenje 2</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Notifications;
