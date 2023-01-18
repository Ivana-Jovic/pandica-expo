import { useNavigation } from "@react-navigation/core";
import { useContext } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
// import { useNavigate } from "react-router-dom";
// import { userInfo } from "data";
// import { useContext } from "react";
// import { AuthContext } from "authContext";
import { View, Text, ScrollView } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { AuthContext } from "../authContext";
import { userInfo } from "../data";
import { getData, storeData } from "../helperFunctions";
type IFormInput = {
  firstName: string;
  lastName: string;
  telephone: string;
  adress: string;
  username: string;
  oldPassword: string;
  newPassword: string;
};

function Register({
  inPopup,
  action,
}: {
  inPopup: boolean;
  action?: () => void;
}) {
  const { user, setUser } = useContext(AuthContext);
  // const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      telephone: "",
      adress: "",
      username: "",
      oldPassword: "",
      newPassword: "",
    },
  });
  const navigation = useNavigation();
  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    if (!inPopup && data.oldPassword !== "") {
      if (data.newPassword === "") {
        Toast.show({
          type: "error",
          text1: "Nova lozinka ne sme biti prazna",
        });
        return;
      }
      if (data.oldPassword !== user?.password) {
        Toast.show({
          type: "error",
          text1: "Ne poklapa se lozinka",
        });
        return;
      }
    }
    const userString = getData("users");
    const users: userInfo[] = JSON.parse(await userString);
    console.log(users);
    const newUser: userInfo = {
      firstName: data.firstName === "" ? user?.firstName + "" : data.firstName,
      lastName: data.lastName === "" ? user?.lastName + "" : data.lastName,
      telephone: data.telephone === "" ? user?.telephone + "" : data.telephone,
      adress: data.adress === "" ? user?.adress + "" : data.adress,
      username: data.username === "" ? user?.username + "" : data.username,
      password:
        data.oldPassword === "" ? user?.password + "" : data.newPassword,
      notifications: !inPopup && user?.notifications ? user?.notifications : [],
    };
    if (!inPopup) {
      Toast.show({
        type: "success",
        text1: "Promenjeni podaci",
      });
      const u = users.find((uu) => {
        return uu.username === user?.username;
      });
      const index = u ? users.indexOf(u) : -2; //iz nekog rayloga ne moze user iy konteksta
      users[index] = newUser;
      storeData("currUser", JSON.stringify(newUser));
      setUser(newUser);
      reset({
        firstName: "",
        lastName: "",
        telephone: "",
        adress: "",
        username: "",
        oldPassword: "",
        newPassword: "",
      });
      navigation.navigate("Pocetna");
    }
    if (inPopup) {
      const u = users.find((uu) => {
        return uu.username === data.username;
      });
      if (u) {
        Toast.show({
          type: "error",
          text1: "Morate odabrati drugo korisnicko ime",
        });
        return;
      }
      reset({
        firstName: "",
        lastName: "",
        telephone: "",
        adress: "",
        username: "",
        oldPassword: "",
        newPassword: "",
      });
      Toast.show({
        type: "success",
        text1: "Registrovani ste",
      });
      storeData("currUser", JSON.stringify(newUser));
      setUser(newUser);
      // action?.(); //popup
      users.push(newUser);
    }
    storeData("users", JSON.stringify(users));
  };

  const cancel = () => {
    Toast.show({
      type: "error",
      text1: "Odustano od promene podtaka",
    });
    reset({
      firstName: "",
      lastName: "",
      telephone: "",
      adress: "",
      username: "",
      oldPassword: "",
      newPassword: "",
    });
    navigation.navigate("Pocetna");
  };
  return (
    <View className="flex flex-col mt-10">
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <View className="flex items-center space-y-4 ">
        <View className="flex flex-row items-center">
          <Text className="w-32">Ime</Text>
          <Controller
            control={control}
            rules={{
              required: inPopup ? true : false,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                className="bg-white w-32"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="firstName"
          />
        </View>
        <View className="flex flex-row items-center">
          <Text className="w-32">Prezime</Text>
          <Controller
            control={control}
            rules={{
              required: inPopup ? true : false,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                className="bg-white w-32"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
          />
        </View>
        <View className="flex flex-row items-center">
          <Text className="w-32">Telefon</Text>
          <Controller
            control={control}
            rules={{
              required: inPopup ? true : false,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                className="bg-white w-32"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="telephone"
          />
        </View>
        <View className="flex flex-row items-center">
          <Text className="w-32">Adresa</Text>
          <Controller
            control={control}
            rules={{
              required: inPopup ? true : false,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                className="bg-white w-32"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="adress"
          />
        </View>
        {inPopup && (
          <View className="flex flex-row items-center">
            <Text className="w-32">Korisnicko ime</Text>
            <Controller
              control={control}
              rules={{
                required: inPopup ? true : false,
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className="bg-white w-32"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="username"
            />
          </View>
        )}
        <View className="flex flex-row items-center">
          <Text className="w-32">{inPopup ? "Lozinka" : "Stara lozinka"}</Text>
          <Controller
            control={control}
            rules={{
              required: inPopup ? true : false,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                className="bg-white w-32"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="oldPassword"
          />
        </View>
        {!inPopup && (
          <View className="flex flex-row items-center">
            <Text className="w-32">Nova lozinka</Text>
            <Controller
              control={control}
              rules={{
                required: inPopup ? true : false,
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className="bg-white w-32"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="newPassword"
            />
          </View>
        )}
      </View>
      <View className="mx-5 flex flex-row space-x-5 justify-center mt-10">
        <TouchableOpacity
          // title="Submit"
          onPress={handleSubmit(onSubmit)}
          className="w-32 p-3 bg-white shadow-m rounded-md"
        >
          <Text className=" text-center uppercase font-semibold">
            {inPopup ? "Registruj se" : "Promeni"}
          </Text>
        </TouchableOpacity>

        {!inPopup && (
          <TouchableOpacity
            onPress={cancel}
            className="p-3  w-32 bg-white shadow-md rounded-md"
          >
            <Text className="text-center uppercase font-semibold">
              Odustani
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* </form> */}
      <View>
        <View>
          <Text className="text-center  my-5">
            {(errors.firstName ||
              errors.lastName ||
              errors.telephone ||
              errors.adress ||
              errors.username ||
              errors.oldPassword ||
              errors.newPassword) &&
              "Sva polja su obavezna"}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Register;
