// import { useNavigate } from "react-router-dom";
import { View, Text, Image } from "react-native";
// import myImage from "/images/zebra.jpg";
// const PlaceholderImage = require("../assets/images/zebra.jpg");
function SmallCard({ name, image }: { name: string; image: string }) {
  // const navigate = useNavigate();
  return (
    <View
      // onClick={() => navigate(`/animal/${name}`)}
      className=" cursor-pointer  w-36 bg-white shadow-xl rounded-sm"
    >
      <Image
        source={require("../assets" + "/images/sumskiris.jpg" + "")}
        alt=""
        className="h-20 w-36 object-cover"
      />
      <View className="w-full ">
        <Text className="w-full text-center">{name}</Text>
      </View>
    </View>
  );
}

export default SmallCard;
