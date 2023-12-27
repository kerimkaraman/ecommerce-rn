import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import { AntDesign } from "@expo/vector-icons";

export default function ProductsSection({ products, categoryText }) {
  return (
    <View className="mt-20 bg-white">
      <View className="mx-4 flex-row items-center justify-between">
        <Text className="text-xl font-medium">{categoryText}</Text>
        <Pressable className="py-2 gap-x-3 flex-row items-center">
          <Text className="tracking-[5px] text-gray-500">SEE MORE</Text>
          <AntDesign name="arrowright" size={16} color="gray" />
        </Pressable>
      </View>
      <View className="flex-row flex-wrap items-center w-[95%] mx-auto">
        {products.map((product) => {
          if (product.category == categoryText.toLowerCase())
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.images[0]}
                price={product.price}
                rating={product.rating}
              />
            );
        })}
      </View>
    </View>
  );
}
