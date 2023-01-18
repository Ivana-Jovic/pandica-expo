import { View, Text, Image, TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import Heart from "../assets/icons/heart.svg";
import HeartRed from "../assets/icons/heartred.svg";
import HeartBlack from "../assets/icons/heartblack.svg";
import { AuthContext } from "../authContext";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { eventInfo } from "../data";
import { getData, storeData } from "../helperFunctions";
function BigCard({
  title,
  description,
  image,
  likes,
  whoLiked,
}: {
  title: string;
  description: string;
  image: string;
  likes: number;
  whoLiked: string[];
}) {
  const { user } = useContext(AuthContext);
  const [li, setLi] = useState<number>(likes);
  const [liked, setLiked] = useState<boolean>(false);
  const like = async () => {
    Toast.show({
      type: "success",
      text1: "Liked",
    });
    // const e: eventInfo[] = JSON.parse(localStorage.getItem("events") + "");
    const eventString = await getData("events");
    const e: eventInfo[] = JSON.parse(eventString);
    for (let i = 0; i < e.length; i++) {
      if (e[i].title === title) {
        if (
          e[i].whoLiked.find((n) => {
            return n === user?.username;
          })
        ) {
          //already liked
          setLi(li - 1);
          e[i].likes = likes - 1;
          setLiked(false);
          e[i].whoLiked = e[i].whoLiked.filter((n) => {
            return n !== user?.username;
          });
        } else {
          setLi(li + 1);
          e[i].likes = likes + 1;
          setLiked(true);
          e[i].whoLiked.push(user?.username + "");
        }
        break;
      }
    }
    storeData("events", JSON.stringify(e));
  };

  useEffect(() => {
    if (user && whoLiked.includes(user.username)) {
      setLiked(true);
    }
  }, [user]);

  return (
    <View>
      <View className="card  p-6 bg-offwhite shadow-xl rounded-sm ">
        <Image source={image} alt="" className="h-28 w-full object-cover" />
        <View className="items-center text-center">
          <Text className="text-lg font-semibold">{title}</Text>
          <Text className="text-left">{description}</Text>
          {!user && (
            <View className="self-end flex flex-row items-center space-x-4">
              <Text className="">{li}</Text>
              <HeartBlack />
            </View>
          )}
          {user && (
            <View className="self-end flex flex-row items-center space-x-4">
              <Text className="">{li}</Text>
              {!liked && (
                <TouchableOpacity onPress={() => like()}>
                  <Heart />
                </TouchableOpacity>
              )}
              {liked && (
                <TouchableOpacity onPress={() => like()}>
                  <HeartRed />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default BigCard;
