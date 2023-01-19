import { Text, View } from "react-native";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function Button({ onPress, text }: { onPress: () => void; text: string }) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className="p-3 m-3 w-32 bg-white rounded-md"
      >
        <Text className="text-center uppercase font-semibold">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
