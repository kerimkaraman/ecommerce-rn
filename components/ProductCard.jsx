import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import { Rating } from "@kolking/react-native-rating";

export default function ProductCard({ image, id, title, price, rating }) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <Pressable
      className="m-1 rounded-md border border-gray-300 bg-white shadow-2xl"
      style={{ width: width / 2.2, height: height / 4 }}
    >
      <Image
        className="mx-auto w-[100%] h-[50%] rounded-tl-md rounded-tr-md"
        style={{ objectFit: "cover" }}
        source={{ uri: image }}
      />
      <View className="mt-6 gap-y-2 p-2">
        <View className="gap-y-2">
          <Text className="text-xs font-thin">{title}</Text>
          <Text className="text-[#97C93E] font-bold">{price} $</Text>
        </View>
        <View>
          <Rating rating={rating} size={12} />
        </View>
      </View>
    </Pressable>
  );
}
