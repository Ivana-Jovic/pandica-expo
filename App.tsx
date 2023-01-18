if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
// import "./styles/global.css";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import tailwindConfig from "./tailwind.config";
import Animal from "./screens/Animal";
import Contact from "./screens/Contact";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import "react-native-gesture-handler";
import Tickets from "./screens/Tickets";
import Notifications from "./screens/Notifications";
import Profile from "./screens/Profile";

import { Toast } from "react-native-toast-message/lib/src/Toast";
import Login from "./screens/Login";
import { AuthContext, AuthProvider } from "./authContext";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import { userInfo } from "./data";
// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <Drawer.Navigator
            screenOptions={{
              drawerPosition: "right",
              drawerActiveBackgroundColor: "#D7DCC8",
              drawerActiveTintColor: "#000000",
              drawerStyle: {
                backgroundColor: "#EBEDE6",
                width: 240,
              },
              // unmountOnBlur: true,
            }}
            drawerContent={(props) => <AppDrawerContent {...props} />}
          >
            {/* <Drawer.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            /> */}
            <Drawer.Screen
              name="Pocetna"
              component={Home}
              options={{ headerShown: false }}
            />

            <Drawer.Screen
              name="Kontakt"
              component={Contact}
              options={{ headerShown: false }}
            />
            <Drawer.Screen
              name="Karte"
              component={Tickets}
              options={{ headerShown: false }}
            />
            {/* <Drawer.Screen
              name="Notififcations"
              component={Notifications}
              options={{
                headerShown: false,
                drawerItemStyle: {
                  display: user ? "flex" : "none",
                },
                // drawerItemStyle: {
                //   display: u ? "flex" : "none",
                // },
              }}
            />
            <Drawer.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            /> */}
            <Drawer.Screen
              name="Animal"
              component={Animal}
              options={{
                headerShown: false,
                drawerItemStyle: {
                  display: "none",
                },
              }}
            />
            <Drawer.Screen
              name="Notifikacije"
              component={Notifications}
              options={{
                headerShown: false,
                drawerItemStyle: {
                  display: "none",
                },
              }}
            />
            <Drawer.Screen
              name="Profil"
              component={Profile}
              options={{
                headerShown: false,
                drawerItemStyle: {
                  display: "none",
                },
              }}
            />
            <Drawer.Screen
              name="Prijava"
              component={Login}
              options={{
                headerShown: false,
                drawerItemStyle: {
                  display: "none",
                },
              }}
            />
          </Drawer.Navigator>
        </AuthProvider>
      </NavigationContainer>

      <Toast />
    </>
  );
}

function AppDrawerContent(props) {
  const { user, signout } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      {/* contentContainerStyle={{ flex: 1 }} */}
      {/*all of the drawer items*/}
      <DrawerItemList {...props} />

      <View
      // style={{ flex: 1, marginVertical: 20, borderWidth: 1 }}
      >
        {/* {!user && (
          <DrawerItem
            label="Prijava"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        )} */}
        {/* here's where you put your logout drawer item*/}
        {user && (
          <>
            <DrawerItem
              label="Notifikacije"
              onPress={() => {
                navigation.navigate("Notifikacije");
              }}
            />
            <DrawerItem
              label="Profil"
              onPress={() => {
                navigation.navigate("Profil");
              }}
            />
            <DrawerItem
              label="Odjava"
              onPress={() => {
                signout();
                navigation.navigate("Pocetna");
              }}
            />
          </>
        )}
        {!user && (
          <>
            <DrawerItem
              label="Prijava"
              onPress={() => {
                navigation.navigate("Prijava");
              }}
            />
          </>
        )}
      </View>
    </DrawerContentScrollView>
  );
}
