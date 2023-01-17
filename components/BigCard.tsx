// import { AuthContext } from "authContext";
// import { eventInfo } from "data";
import { View, Text, Image } from "react-native";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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
  // const { user } = useContext(AuthContext);
  const [li, setLi] = useState<number>(likes);
  const [liked, setLiked] = useState<boolean>(false);
  // const like = () => {
  //   toast.success("Liked");
  //   const e: eventInfo[] = JSON.parse(localStorage.getItem("events") + "");
  //   for (let i = 0; i < e.length; i++) {
  //     if (e[i].title === title) {
  //       if (
  //         e[i].whoLiked.find((n) => {
  //           return n === user?.username;
  //         })
  //       ) {
  //         //already liked
  //         setLi(li - 1);
  //         e[i].likes = likes - 1;
  //         setLiked(false);
  //         e[i].whoLiked = e[i].whoLiked.filter((n) => {
  //           return n !== user?.username;
  //         });
  //       } else {
  //         setLi(li + 1);
  //         e[i].likes = likes + 1;
  //         setLiked(true);

  //         e[i].whoLiked.push(user?.username + "");
  //       }

  //       break;
  //     }
  //   }
  //   localStorage.setItem("events", JSON.stringify(e));
  // };

  // useEffect(() => {
  //   if (user && whoLiked.includes(user.username)) {
  //     setLiked(true);
  //   }
  // }, [user]);

  return (
    <View>
      <View className="card  p-6 bg-offwhite shadow-xl rounded-sm ">
        <Image
          source={require("../assets" + "/images/sumskiris.jpg" + "")}
          alt=""
          className="h-28 w-full object-cover"
          // src={image}
          // alt=""
          // className="rounded-sm h-40 w-[350px] object-cover "
        />
        <View className="items-center text-center">
          <Text className="text-lg font-semibold">{title}</Text>
          <Text className="text-left">{description}</Text>
          {/* {!user && ( */}
          {/* <View className="self-end card-actions ">
            {/* {li} */}
          {/*  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </View>
          {/* )} */}
          {/* {user && ( onPress={() => like()}*/}

          <View className="self-end ">
            <Text>
              {li}
              {/*  */}
            </Text>
            {/* <UserIcon size={24} color="#111111" /> */}
            {/*  */}
            {/* {!liked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          )} */}
            {/* {liked && ( */}
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg> */}
            {/* )} */}
          </View>
          {/* )}  */}
        </View>
      </View>
    </View>
  );
}

export default BigCard;
