import { View, Text, Image } from "react-native";
import React from "react";

export default function SearchItem({ image, id, title, price, category }) {
  return (
    <View className="flex-row items-center gap-x-6 mx-3 border-b border-gray-300 pb-6">
      <View>
        {image && (
          <Image
            className="w-[70px] h-[70px] bg-white shadow"
            style={{ objectFit: "cover" }}
            source={{ uri: image }}
          />
        )}
      </View>
      <View className="flex-col gap-y-1 w-[40%]">
        <Text className="font-bold text-lg">{title}</Text>
      </View>
      <View>
        <Text className="font-semibold text-lg text-purple-700">{price} $</Text>
      </View>
    </View>
  );
}
