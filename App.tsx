// import "./styles/global.css";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import tailwindConfig from "./tailwind.config";
import Animal from "./screens/Animal";
import Contact from "./screens/Contact";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import Tickets from "./screens/Tickets";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    // <tailwindConfig>
    // {/* // <tailwind provider 24:40 */}
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "right",
          drawerActiveBackgroundColor: "#D7DCC8",
          drawerActiveTintColor: "#000000",
          drawerStyle: {
            backgroundColor: "#EBEDE6",
            width: 240,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Animal"
          component={Animal}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Tickets"
          component={Tickets}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>

      {/* // <SafeAreaView className="flex-1 items-center justify-center bg-white">
    //   <Text style={{}}>Opefffn up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </SafeAreaView> */}
    </NavigationContainer>
    // </tailwindConfig>
  );
}
