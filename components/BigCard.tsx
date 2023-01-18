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
  const [numOfLikes, setNumOfLikes] = useState<number>(likes);
  const [liked, setLiked] = useState<boolean>(false);
  const like = async () => {
    Toast.show({
      type: "success",
      text1: "Liked",
    });
    // const e: eventInfo[] = JSON.parse(localStorage.getItem("events") + "");
    const eventString = await getData("events");
    const events: eventInfo[] = JSON.parse(eventString);
    for (let i = 0; i < events.length; i++) {
      if (events[i].title === title) {
        if (
          events[i].whoLiked.find((n) => {
            return n === user?.username;
          })
        ) {
          //already liked
          setNumOfLikes(numOfLikes - 1);
          events[i].likes = likes - 1;
          setLiked(false);
          events[i].whoLiked = events[i].whoLiked.filter((n) => {
            return n !== user?.username;
          });
        } else {
          setNumOfLikes(numOfLikes + 1);
          events[i].likes = likes + 1;
          setLiked(true);
          events[i].whoLiked.push(user?.username + "");
        }
        break;
      }
    }
    storeData("events", JSON.stringify(events));
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
              <Text className="">{numOfLikes}</Text>
              <HeartBlack />
            </View>
          )}
          {user && (
            <View className="self-end flex flex-row items-center space-x-4">
              <Text className="">{numOfLikes}</Text>
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
