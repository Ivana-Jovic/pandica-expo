// import bgImage from "images/panda.jpg";
// import Register from "components/Register";
// import { useContext } from "react";
// import { AuthContext } from "authContext";
// import ErrorPage from "./ErrorPage";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

function Profile() {
  // const { user } = useContext(AuthContext);
  // if (!user || user?.username === "admin") return <ErrorPage />;

  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />
      <ScrollView className="flex flex-col bg-lightGreen ">
        <View
          className="flex flex-col
          items-center
          "
        >
          <Text className="my-10 text-2xl font-semibold">Profile</Text>
          <Register inPopup={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
