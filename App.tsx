// import "./styles/global.css";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import tailwindConfig from "./tailwind.config";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <tailwindConfig>
    // {/* // <tailwind provider 24:40 */}
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {/* // <SafeAreaView className="flex-1 items-center justify-center bg-white">
    //   <Text style={{}}>Opefffn up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </SafeAreaView> */}
    </NavigationContainer>
    // </tailwindConfig>
  );
}
