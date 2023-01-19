import { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TicketCard from "../components/TicketCard";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import TicketCardPicture from "../components/TicketCardPicture";
import Minus from "../assets/icons/minus.svg";
import Plus from "../assets/icons/plus.svg";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { AuthContext } from "../authContext";
import Button from "../components/Button";

function Tickets() {
  const { user } = useContext(AuthContext);
  const [count, seCount] = useState<number>(1);
  const [selectedItemTitle, setSelectedItemTitle] = useState<string>("");
  const [selectedItemPrice, setSelectedItemPrice] = useState<number>(0);
  const [promo, setPromo] = useState<string>("");

  const handleChange = (text: string) => {
    setPromo(text);
    if (text === "promo") {
      setSelectedItemPrice(selectedItemPrice * 0.9);
    }
  };

  const buy = () => {
    Toast.show({
      type: "success",
      text1: "Kupljena ulaznica",
    });
    setSelectedItemPrice(0);
    setSelectedItemTitle("");
  };

  const cancel = () => {
    Toast.show({
      type: "error",
      text1: "Odustano od kupovine ulaznica",
    });
    setSelectedItemPrice(0);
    setSelectedItemTitle("");
  };

  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />
      <ScrollView className="px-10 bg-lightGreen flex flex-col grow  ">
        {!user && selectedItemTitle && (
          <Text className="my-10 text-center  text-2xl font-semibold">
            Za kupovinu ulaznica morate se prijaviti.
          </Text>
        )}
        {user && selectedItemTitle && (
          <View className="flex flex-col mb-10  mt-10">
            <View className="py-3 flex flex-row justify-between px-5">
              <Text>{selectedItemTitle}</Text>
              <View className="flex flex-row items-center">
                <TouchableOpacity
                  onPress={() => {
                    if (count > 1) seCount(count - 1);
                  }}
                  className=""
                >
                  <Minus />
                </TouchableOpacity>
                <Text> &nbsp; {count} komada &nbsp;</Text>

                <TouchableOpacity
                  onPress={() => seCount(count + 1)}
                  className=""
                >
                  <Plus />
                </TouchableOpacity>
              </View>
            </View>
            <View className="border"></View>
            <View className="py-3 flex flex-row justify-between px-5">
              <Text>Promo kod</Text>
              <View>
                <TextInput
                  className="bg-white w-32"
                  onChangeText={(text) => handleChange(text)}
                  value={promo}
                />
              </View>
            </View>
            <View className="border"></View>
            <View className="py-3 flex flex-row justify-between px-5">
              <Text className="">Ukupno:</Text>
              <Text>{selectedItemPrice * count} rsd</Text>
            </View>
            <View className="border"></View>
            <View className="py-3 flex flex-row space-x-7 justify-center">
              <Button onPress={buy} text={"Kupi"} />
              <Button onPress={cancel} text={"Odustani"} />
            </View>
          </View>
        )}

        <View className="mt-10 flex ">
          <TicketCard
            title="Pojedinačna ulaznica"
            description="400rsd"
            price={400}
            setSelectedItemTitle={setSelectedItemTitle}
            setSelectedItemPrice={setSelectedItemPrice}
          />
          <TicketCard
            title="Grupna ulaznica"
            description="350rsd"
            price={350}
            setSelectedItemTitle={setSelectedItemTitle}
            setSelectedItemPrice={setSelectedItemPrice}
          />
        </View>
        <View className=" mb-10 flex flex-col ">
          <TicketCardPicture
            title="Promotivni paket 1"
            description="Uz kupovinu 2 karte dobijate besplatno piće u kafeu"
            price={800}
            setSelectedItemTitle={setSelectedItemTitle}
            setSelectedItemPrice={setSelectedItemPrice}
          />
          <TicketCardPicture
            title="Promotivni paket 2"
            description="Uz kupovinu 3 karte dobijate suvenir na poklon"
            price={1200}
            setSelectedItemTitle={setSelectedItemTitle}
            setSelectedItemPrice={setSelectedItemPrice}
          />
          <TicketCardPicture
            title="Promotivni paket 3"
            description="Uz kupovinu 4 karte dobijate privatnu turu u trajanju od 30 min"
            price={1600}
            setSelectedItemTitle={setSelectedItemTitle}
            setSelectedItemPrice={setSelectedItemPrice}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tickets;
