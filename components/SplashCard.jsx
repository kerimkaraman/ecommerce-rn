import { View, Text, Image, Pressable } from "react-native";
import React from "react";

export default function SplashCard({ image, name, id }) {
  const discounts = [50, 70, 90, 40];
  const random = Math.floor(Math.random() * 3);
  return (
    <View className="bg-white rounded-xl shadow-xl p-4">
      <View className="bg-green-400 p-2 mb-6 rounded-lg">
        <Text className="text-center font-bold text-lg">
          %{discounts[random]} off
        </Text>
      </View>
      <View className="items-center justify-center gap-y-4">
        <Image
          style={{ objectFit: "contain" }}
          className="w-[250px] h-[300px] object-contain"
          source={{ uri: image }}
        />
        <Text className="text-center px-6">{name}</Text>
      </View>
      <Pressable className="bg-green-300 self-start p-2 mx-auto mt-6 rounded-md">
        <Text>Go to Product</Text>
      </Pressable>
    </View>
  );
}
