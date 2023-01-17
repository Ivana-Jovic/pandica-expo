import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    // const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // return jsonValue != null ? JSON.parse(jsonValue) : null;
    return jsonValue != null ? jsonValue : null;
  } catch (e) {
    // error reading value
  }
};

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
// export const getAllKeys = async () => {
//   // let keys = []
//   try {
//     const keys: readonly string[] = await AsyncStorage.getAllKeys();
//     return keys;
//   } catch (e) {
//     // read key error
//   }

// //   console.log(keys);
//   // example console.log result:
//   // ['@MyApp_user', '@MyApp_key']
// };
// export const getMultiple = async (keys: Array<string>) => {
//   let values;
//   try {
//     values = await AsyncStorage.multiGet(keys);
//   } catch (e) {
//     // read error
//   }
//   console.log(values);

//   // example console.log output:
//   // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
// };

// export const isAsyncStorageEmpty=()=>{
//     const keys:string[]=getAllKeys()
//     getMultiple(keys)
// }
