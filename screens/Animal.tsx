import { useNavigation, useRoute } from "@react-navigation/core";
import { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../authContext";
import Navbar from "../components/Navbar";
import { animalInfo } from "../data";
import { getData, storeData } from "../helperFunctions";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { TextInput } from "react-native-gesture-handler";
import Button from "../components/Button";

function Animal() {
  const {
    // params: { animal },
    params: { animalName },
  } = useRoute();
  const currAnimalName: string = JSON.parse(animalName);
  const [currAnimal, setCurrAnimal] = useState<animalInfo | undefined>();
  const { user } = useContext(AuthContext);
  const [wantToComm, setWantToComm] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>("");
  const navigation = useNavigation();

  const postComment = () => {
    Toast.show({
      type: "success",
      text1: "Komentar ostavljen",
    });
    getData("animals").then((animalString) => {
      const animals: animalInfo[] = JSON.parse(animalString);
      animals.forEach((element) => {
        if (element.name === currAnimal.name) {
          element.comments.push(user?.username + ": " + newComment);
          setCurrAnimal(element);
        }
      });
      storeData("animals", JSON.stringify(animals)).then(() => {
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

  useEffect(() => {
    getData("animals").then((animalString) => {
      const animals: animalInfo[] = JSON.parse(animalString);
      setCurrAnimal(animals.find((animal) => animal.name === currAnimalName));
    });
  }, [currAnimalName]);

  return (
    <SafeAreaView className=" bg-darkGreen">
      <Navbar />
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
          <View className="mb-28 flex flex-col items-center">
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
              <Button
                onPress={() => setWantToComm(!wantToComm)}
                text={"Komentarisi"}
              />
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
                  <Button onPress={postComment} text={"Postavi"} />
                  <Button onPress={cancelComment} text={"Ponisti"} />
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
