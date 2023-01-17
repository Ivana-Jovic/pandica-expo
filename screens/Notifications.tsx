import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
function Notifications() {
  // const { user } = useContext(AuthContext);
  // if (!user || user?.username === "admin") return <ErrorPage />;

  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />

      <ScrollView className="px-20 w-full  flex flex-col bg-lightGreen">
        <Text className="my-5 text-2xl font-semibold text-center">
          Moja obaveštenja
        </Text>
        <View className="flex gap-7 justify-center ">
          <View className="p-3  rounded-sm  bg-white w-full">
            <Text className="  text-left">Obavestenje 1</Text>
          </View>
          <View className="p-3  rounded-sm  bg-white w-full">
            <Text className="  text-left">Obavestenje 2</Text>
          </View>
          {/* {user &&
            user?.notifications
              .slice(0)
              .reverse()
              .map((not) => {
                return (
                  <View
                    key={not}
                    className="textarea  rounded-sm text-left bg-white w-full"
                  >
                    {not}
                  </View>
                );
              })} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Notifications;
