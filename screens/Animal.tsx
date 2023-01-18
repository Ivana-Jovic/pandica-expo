import { useNavigation, useRoute } from "@react-navigation/core";
import { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../authContext";
import Navbar from "../components/Navbar";
import { animalInfo } from "../data";
import { getData, storeData } from "../helperFunctions";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

function Animal() {
  const {
    // params: { animal },
    params: { animalName },
  } = useRoute();
  const currAnimalName: string = JSON.parse(animalName);

  console.log("----------" + currAnimalName);
  const [currAnimal, setCurrAnimal] = useState<animalInfo>();
  // const currAnimal: animalInfo = JSON.parse(animal);

  const { user } = useContext(AuthContext);
  const [wantToComm, setWantToComm] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);
  const navigation = useNavigation();
  const postComment = () => {
    Toast.show({
      type: "success",
      text1: "Komentar ostavljen",
    });
    getData("animals").then((animalString) => {
      const a: animalInfo[] = JSON.parse(animalString);
      for (let i = 0; i < a.length; i++) {
        if (a[i].name === currAnimal.name) {
          a[i].comments.push(user?.username + ": " + newComment);

          break;
        }
      }
      storeData("animals", JSON.stringify(a)).then(() => {
        setWantToComm(!wantToComm);
        setNewComment("");
        navigation.navigate("Pocetna");
      });
    });
  };
  const cancelComment = () => {
    setWantToComm(!wantToComm);
    setNewComment("");
    Toast.show({
      type: "error",
      text1: "Odustano od postavljanja komentara",
    });
  };
  // const a: animalInfo[] = JSON.parse(localStorage.getItem("animals") + "");

  useEffect(() => {
    // console.log("In useEFFANimal 1");
    getData("animals").then((animalString) => {
      const a: animalInfo[] = JSON.parse(animalString);
      // console.log("In useEFFANimal 2");
      for (let i = 0; i < a.length; i++) {
        if (a[i].name === currAnimalName) {
          setCurrAnimal(a[i]);
          break;
        }
      }
    });
  }, [currAnimalName]);

  return (
    <SafeAreaView className=" bg-darkGreen flex flex-col  w-full">
      <Navbar />
      <Text>HAi{currAnimalName}</Text>
      {currAnimalName && (
        <ScrollView className="p-10 bg-lightGreen ">
          <Text className="text-2xl  text-center font-semibold">
            {currAnimal?.name}
          </Text>

          <View className="flex-col flex items-center  ">
            <Image
              source={currAnimal?.image}
              alt=""
              className="h-36 w-full object-cover border border-gray-300 my-5"
            />

            <Text className=" bg-white p-7 "> {currAnimal?.description} </Text>
          </View>
          <View className="w-full mb-28 flex flex-col items-center">
            <Text className="text-2xl font-semibold  my-10">
              Komentari drugih korisnika
            </Text>
            <View className="flex space-y-5 justify-center w-full mb-10">
              {currAnimal?.comments.map((comment) => {
                return (
                  <View
                    key={comment}
                    className=" p-3 rounded-sm  bg-white w-full"
                  >
                    <Text className="font-bold"> {comment.split(":")[0]}</Text>

                    <Text> {comment.split(":")[1]}</Text>
                  </View>
                );
              })}
            </View>
            {user && !wantToComm && (
              <TouchableOpacity
                onPress={() => setWantToComm(!wantToComm)}
                className="mb-10 p-3 w-48 bg-offwhite shadow-m rounded-md"
              >
                <Text className="text-center uppercase font-semibold">
                  Ostavi komentar
                </Text>
              </TouchableOpacity>
            )}

            {wantToComm && (
              <View className="w-full flex items-center">
                <View className="mt-10 w-full">
                  <TextInput
                    value={newComment}
                    onChangeText={setNewComment}
                    className="bg-white w-full p-3"
                    placeholder="Ostavi komentar ovde"
                  />
                </View>
                <View className=" my-5 flex flex-row space-x-10">
                  <TouchableOpacity
                    onPress={postComment}
                    className=" p-3 w-32 bg-offwhite shadow-m rounded-md"
                  >
                    <Text className="text-center uppercase font-semibold">
                      Postavi
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={cancelComment}
                    className="p-3 w-32 bg-offwhite shadow-m rounded-md"
                  >
                    <Text className="text-center uppercase font-semibold">
                      Ponisti
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

export default Animal;
