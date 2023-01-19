import { useContext, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../authContext";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import ErrorPage from "./ErrorPage";

function Profile() {
  const { user } = useContext(AuthContext);
  if (!user) return <ErrorPage />;
  const [changeProfile, setChangeProfile] = useState<boolean>(false);

  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />
      <ScrollView className=" bg-lightGreen ">
        <View className="flex flex-col items-center">
          <Text className="mt-10 text-2xl font-semibold">Profile</Text>
          {user && !changeProfile && (
            <View className="flex items-center space-y-3 mt-10">
              <View className="flex flex-row items-center w-64">
                <Text className="w-32">Ime</Text>
                <Text>{user.firstName}</Text>
              </View>
              <View className="flex flex-row items-center w-64">
                <Text className="w-32">Prezime</Text>
                <Text>{user.lastName}</Text>
              </View>
              <View className="flex flex-row items-center w-64">
                <Text className="w-32">Telefon</Text>
                <Text>{user.telephone}</Text>
              </View>
              <View className="flex flex-row items-center w-64">
                <Text className="w-32">Adresa</Text>
                <Text>{user.adress}</Text>
              </View>
              <View className="flex flex-row items-center w-64">
                <Text className="w-32">Korisnicko ime</Text>
                <Text>{user.username}</Text>
              </View>

              <Button
                onPress={() => {
                  setChangeProfile(true);
                }}
                text={"Promena"}
              />
            </View>
          )}
          {changeProfile && (
            <Register inPopup={false} setChangeProfile={setChangeProfile} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
