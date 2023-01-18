if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
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

const Drawer = createDrawerNavigator();
export default function App() {
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
            }}
            drawerContent={(props) => <AppDrawerContent {...props} />}
          >
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

            <Drawer.Screen
              name="Animal"
              component={Animal}
              options={{
                headerShown: false,
                drawerItemStyle: {
                  display: "none", // display: u ? "flex" : "none", nece..
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
      <DrawerItemList {...props} />
      <View>
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
