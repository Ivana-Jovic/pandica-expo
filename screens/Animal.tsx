import { useRoute } from "@react-navigation/core";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import { animalInfo } from "../data";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import bgImage from "images/panda.jpg";
// import { useParams } from "react-router-dom";
// import { animalInfo } from "data";
// import { AuthContext } from "authContext";

function Animal() {
  const {
    params: { animal },
  } = useRoute();
  const currAnimal: animalInfo = JSON.parse(animal);
  // const { user } = useContext(AuthContext);
  // const [wantToComm, setWantToComm] = useState<boolean>(false);
  // const [newComment, setNewComment] = useState<string>("");
  // const postComment = () => {
  //   toast.success("Komentar ostavljen");
  //   const a: animalInfo[] = JSON.parse(localStorage.getItem("animals") + "");
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i].name === name) {
  //       a[i].comments.push(user?.username + ": " + newComment);
  //       break;
  //     }
  //   }
  //   localStorage.setItem("animals", JSON.stringify(a));
  //   setWantToComm(!wantToComm);
  //   setNewComment("");
  // };
  // const cancelComment = () => {
  //   setWantToComm(!wantToComm);
  //   setNewComment("");
  //   toast.error("Odustano od postavljanja komentara");
  // };

  // let { name } = useParams(); //MIKI tim prome
  // const [currAnimal, setCurrAnimal] = useState<animalInfo>();
  // const a: animalInfo[] = JSON.parse(localStorage.getItem("animals") + "");

  // useEffect(() => {
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[i].name === name) {
  //       // MIKI sta raditi sa tipom use state use ref ;
  //       setCurrAnimal(a[i]);
  //       //     //  da li treba use efef
  //       break;
  //     }
  //   }
  // }, []);
  return (
    <SafeAreaView className=" bg-darkGreen flex flex-col  w-full">
      <Navbar />
      <ScrollView className="p-10 bg-lightGreen ">
        <Text className="text-2xl  text-center font-semibold">
          {currAnimal?.name}
        </Text>

        <View className="flex-col flex items-center  ">
          {/* <View className=""> */}
          {/* <img
            src={currAnimal?.image}
            alt=""
            className="max-w-[400px] border border-gray-300"
          /> */}
          <Image
            source={require("../assets" + "/images/sumskiris.jpg" + "")}
            alt=""
            className="h-36 w-full object-cover border border-gray-300 my-5"
          />
          {/* </View> */}

          <Text className=" bg-white p-7 "> {currAnimal.description} </Text>
        </View>
        <View className="w-full mb-28">
          <Text className="text-2xl font-semibold  my-10">
            Komentari drugih korisnika
          </Text>
          <View className="flex space-y-5 justify-center">
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
          {/* {user && user.username !== "admin" && !wantToComm && (
          <button
            onClick={() => setWantToComm(!wantToComm)}
            className="mt-5 btn border-none w-48 bg-white hover:bg-white  shadow-md hover:shadow-lg text-black   rounded-md "
          >
            Ostavi komentar
          </button>
        )} */}

          {/* {wantToComm && (
          <View>
            <View className="mt-10">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="textarea w-full rounded-sm "
              ></textarea>
            </View>
            <View className="flex gap-10 justify-center">
              <button
                onClick={postComment}
                className="mt-5 btn border-none w-48 bg-white hover:bg-white  shadow-md hover:shadow-lg text-black   rounded-md "
              >
                Postavi
              </button>
              <button
                onClick={cancelComment}
                className="mt-5 btn border-none w-48 bg-white hover:bg-white  shadow-md hover:shadow-lg text-black   rounded-md "
              >
                Ponisti
              </button>
            </View>
          </View>
        )} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Animal;
