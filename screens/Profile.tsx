// import bgImage from "images/panda.jpg";
// import Register from "components/Register";
// import { useContext } from "react";
// import { AuthContext } from "authContext";
// import ErrorPage from "./ErrorPage";
import { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../authContext";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import ErrorPage from "./ErrorPage";

function Profile() {
  const { user } = useContext(AuthContext);
  if (!user) return <ErrorPage />;
  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />
      <ScrollView className="flex flex-col bg-lightGreen ">
        <View
          className="flex flex-col
          items-center
          "
        >
          <Text className="mt-10 text-2xl font-semibold">Profile</Text>
          <Register inPopup={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
