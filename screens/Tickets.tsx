import { useContext, useState } from "react";
// import toast from "react-hot-toast";
// import bgImage from "images/panda.jpg";
// import { AuthContext } from "authContext";
// import ErrorPage from "./ErrorPage";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, TouchableOpacity } from "react-native";
import TicketCard from "../components/TicketCard";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

function Tickets() {
  // const { user } = useContext(AuthContext);
  // const [count, seCount] = useState<number>(1);
  const [selectedItemTitle, setSelectedItemTitle] = useState<string>("");
  const [selectedItemPrice, setSelectedItemPrice] = useState<number>(0);
  // const [promo, setPromo] = useState<string>("");
  // if (user?.username === "admin") return <ErrorPage />;
  // const handleChange = (event: any) => {
  //   setPromo(event.target.value);
  //   if (event.target.value === "promo") {
  //     setSelectedItemPrice(selectedItemPrice * 0.9);
  //   }
  // };

  // const buy = () => {
  //   toast.success("Kupljena ulaznica");
  //   const notificationsAdmin: string[] = JSON.parse(
  //     localStorage.getItem("notificationAdmin") + ""
  //   );
  //   notificationsAdmin.push(user?.username + ": ceka odobravanje");
  //   localStorage.setItem(
  //     "notificationAdmin",
  //     JSON.stringify(notificationsAdmin)
  //   );

  //   setSelectedItemPrice(0);
  //   setSelectedItemTitle("");
  // };

  // const cancel = () => {
  //   toast.error("Odustano od kupovine ulaznica");
  //   setSelectedItemPrice(0);
  //   setSelectedItemTitle("");
  // };

  return (
    <SafeAreaView className=" bg-darkGreen grow">
      <Navbar />
      <ScrollView className="px-10 bg-lightGreen flex flex-col grow">
        <View className="mt-10 flex space-y-48 ">
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
        {/* <View className=" mt-20 mb-10 flex gap-20 flex-wrap justify-center">
        <TicketCardPicture
          title="Promotivni paket 1"
          description=" Uz kupovinu 2 karte dobijate besplatno piće u kafeu"
          price={800}
          setSelectedItemTitle={setSelectedItemTitle}
          setSelectedItemPrice={setSelectedItemPrice}
        />
        <TicketCardPicture
          title="Promotivni paket 2"
          description=" Uz kupovinu 3 karte dobijate suvenir na poklon"
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
      </View> */}
        {/* {!user && selectedItemTitle && (
        <View className="my-10 text-2xl font-semibold">
          Za kupovinu ulaznica morate se prijaviti.
        </View>
      )} */}
        {/* {user && selectedItemTitle && (
        <View className="flex flex-col w-96 gap-6 mb-10  mt-20">
          <View className="flex justify-between px-5">
            <View>{selectedItemTitle}</View>
            <View className="flex items-center">
              <button
                onClick={() => {
                  if (count > 1) seCount(count - 1);
                }}
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
              &nbsp; {count} komada &nbsp;
              <button onClick={() => seCount(count + 1)} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </View>
          </View> */}
        {/* <hr className="border-black" /> */}
        {/* <View className="flex justify-between px-5">
            <View>Promo kod</View>
            <View>
              <input
                value={promo}
                onChange={handleChange}
                type="text"
                className="outline-none w-36"
              />
            </View>
          </View>
          <hr className=" border-black" />
          <View className="flex justify-between px-5">
            <View className="flex items-center">
              Ukupno:
              {/* <View className="text-[8px]">(bez promo koda):</View> */}
        {/* </View>
            <View>{selectedItemPrice * count} rsd</View>
          </View>
          <hr className="border-black" />
          <View className="flex gap-7 justify-center">
            <button
              onClick={buy}
              className="btn border-none w-28 bg-offwhite hover:bg-offwhite shadow-md hover:shadow-lg text-black   rounded-md "
            >
              Kupi
            </button>
            <button
              onClick={cancel}
              className="btn border-none w-28 bg-offwhite hover:bg-offwhite  shadow-md hover:shadow-lg text-black   rounded-md "
            >
              Odustani
            </button>
          </View>
        </View>
      )} */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Tickets;
