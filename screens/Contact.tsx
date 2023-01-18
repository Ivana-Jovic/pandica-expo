import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
function Contact() {
  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />

      <ScrollView className="bg-lightGreen  flex flex-col   px-10">
        <View className=" flex items-center bg-base-100 rounded-none bg-transTextarent">
          <View className="my-16 flex items-center">
            <Text className="font-semibold">Radimo 365 dana u godini: </Text>
            <Text className="font-semibold">mart do oktobar 9–18</Text>
            <Text className="font-semibold">novembar do februar 9–17</Text>
            <Text className="font-semibold"> </Text>
            <Text className="font-semibold"> </Text>
            <Text className="font-semibold">
              Mali Kalemegdan 811000 Beograd
            </Text>
            <Text className="font-semibold"> +381 65 1234 567 </Text>
            <Text className="font-semibold">Textandica@gmail.com</Text>
          </View>
          <Image
            source={require("../assets/images/map.jpg")}
            alt=""
            className=" h-52 border border-gray-300"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Contact;
