import { useNavigation } from "@react-navigation/core";
import { Dispatch, useContext } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { TextInput } from "react-native";
import { View, Text } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { AuthContext } from "../authContext";
import { userInfo } from "../data";
import { getData, storeData } from "../helperFunctions";
import Button from "./Button";

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
  setChangeProfile,
}: {
  inPopup: boolean;
  // action?: () => void;
  setChangeProfile?: Dispatch<React.SetStateAction<boolean>>;
}) {
  const { user, setUser } = useContext(AuthContext);
  const {
    handleSubmit,
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
  const restart = () => {
    reset({
      firstName: "",
      lastName: "",
      telephone: "",
      adress: "",
      username: "",
      oldPassword: "",
      newPassword: "",
    });
  };
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

    const newUser: userInfo = {
      firstName: data.firstName === "" ? user?.firstName ?? "" : data.firstName,
      lastName: data.lastName === "" ? user?.lastName ?? "" : data.lastName,
      telephone: data.telephone === "" ? user?.telephone ?? "" : data.telephone,
      adress: data.adress === "" ? user?.adress ?? "" : data.adress,
      username: data.username === "" ? user?.username ?? "" : data.username,
      password: inPopup
        ? data.oldPassword
        : data.oldPassword === ""
        ? user?.password ?? ""
        : data.newPassword,
      notifications: !inPopup && user?.notifications ? user?.notifications : [],
    };
    if (!inPopup) {
      //edit profile
      Toast.show({
        type: "success",
        text1: "Promenjeni podaci",
      });
      const index = users.findIndex((u) => u.username === user?.username);
      users[index] = newUser;
      storeData("currUser", JSON.stringify(newUser));
      setUser(newUser);
      restart();
    } else {
      if (users.some((u) => u.username === data.username)) {
        Toast.show({
          type: "error",
          text1: "Morate odabrati drugo korisnicko ime",
        });
        return;
      }
      restart();
      Toast.show({
        type: "success",
        text1: "Registrovani ste",
      });
      storeData("currUser", JSON.stringify(newUser));
      setUser(newUser);
      users.push(newUser);
    }
    storeData("users", JSON.stringify(users));
    if (setChangeProfile) setChangeProfile(false);
    navigation.navigate("Pocetna");
  };

  const cancel = () => {
    Toast.show({
      type: "error",
      text1: "Odustano od promene podtaka",
    });
    restart();
    if (setChangeProfile) setChangeProfile(false);
    // navigation.navigate("Pocetna");
  };
  return (
    <View className="flex flex-col mt-10">
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
        <Button
          onPress={handleSubmit(onSubmit)}
          text={inPopup ? "Registruj se" : "Promeni"}
        />
        {!inPopup && <Button onPress={cancel} text={"Odustani"} />}
      </View>

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
  );
}

export default Register;
