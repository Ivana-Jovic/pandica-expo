import { createContext, Dispatch, useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
// import { toast } from "react-hot-toast";
import { userInfo } from "./data";
// import { useNavigate } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData, removeValue, storeData } from "./helperFunctions";

type ContextType = {
  user: undefined | userInfo;
  setUser: Dispatch<React.SetStateAction<userInfo | undefined>>;
  signout: () => void;

  signin: (username: string, password: string) => boolean;
};
type AuthProviderProps = {
  children?: React.ReactNode;
};
export const AuthContext = createContext<ContextType>({
  user: undefined,
  setUser: () => {},
  signout: () => {},
  signin: () => false,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<undefined | userInfo>(undefined);

  const signout = () => {
    // localStorage.removeItem("currUser");
    removeValue("currUser");
    setUser(undefined);
  };

  const signin = (username: string, password: string) => {
    // const users: userInfo[] = JSON.parse(localStorage.getItem("users") + "");
    const userString = getData("currUser");
    const users: userInfo[] =
      typeof userString === "string" ? JSON.parse(userString) : {};
    const currUser = users.find((user) => {
      return user.username === username && user.password === password;
    });

    if (currUser) {
      Toast.show({
        type: "success",
        text1: "Logovan",
      });
      console.log(currUser);
      // localStorage.setItem("currUser", JSON.stringify(currUser));
      storeData("currUser", JSON.stringify(currUser));
      setUser(currUser);
      return true;
    } else {
      Toast.show({
        type: "error",
        text1: "Neuspesno",
      });
      return false;
    }
  };
  useEffect(() => {
    // const userString = localStorage.getItem("currUser");
    const userString = getData("currUser");
    if (typeof userString === "string") setUser(JSON.parse(userString));

    storeData("aaaaa", JSON.stringify("AAAaBBB"));
    storeData("aaaaan", JSON.stringify("AAAa"));
  }, []);

  const u: ContextType = {
    user,
    setUser,
    signout,
    signin,
  };
  return <AuthContext.Provider value={u}>{children}</AuthContext.Provider>;
};