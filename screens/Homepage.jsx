import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons, Entypo, AntDesign } from "@expo/vector-icons";
import ProductCard from "../components/ProductCard";
import ProductsSection from "../components/ProductsSection";

export default function Homepage({ navigation }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getAllData() {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.products))
      .then(setIsLoading(false));
  }

  useEffect(() => {
    getAllData();
  }, []);

  return isLoading ? null : (
    <View className="bg-white" style={{ flex: 1 }}>
      <SafeAreaView className="bg-white">
        <ScrollView className="bg-white">
          <View className="flex-row items-center justify-around mt-5">
            <Pressable
              onPress={() => navigation.navigate("SearchScreen")}
              className="bg-gray-300 w-[80%] px-4 py-1 rounded-md flex-row justify-between items-center"
            >
              <Text className="py-1 text-gray-400 text-lg">
                Search for product
              </Text>
              <Pressable>
                <EvilIcons name="search" size={24} color="grey" />
              </Pressable>
            </Pressable>
            <Pressable>
              <Entypo name="shopping-cart" size={24} color="grey" />
            </Pressable>
          </View>
          <View className="mt-6  items-center justify-center">
            <Image
              className="w-[150px] h-[150px] mx-auto"
              source={{
                uri: "https://fakeapi.platzi.com/_astro/logo.aa139940.png",
              }}
            />
            <Text className="text-[#97C93E] text-5xl font-bold my-5">
              Platzi
            </Text>
            <Text className="font-thin">This is your new area.</Text>
          </View>
          <ProductsSection products={products} categoryText="Smartphones" />
          <ProductsSection products={products} categoryText="Laptops" />
          <ProductsSection products={products} categoryText="Fragrances" />
          <ProductsSection products={products} categoryText="Skincare" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
