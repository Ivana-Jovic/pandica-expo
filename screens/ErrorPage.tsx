import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  return (
    <SafeAreaView className=" bg-darkGreen grow ">
      <Navbar />
      <ScrollView className=" pt-5  flex bg-lightGreen grow">
        <Text className="mt-10 text-center ">
          Morate biti prijavljeni kako biste pristupili ovoj stranici
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
