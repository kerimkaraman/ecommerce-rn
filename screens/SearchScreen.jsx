import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import SearchItem from "../components/SearchItem";

export default function SearchScreen({ navigation }) {
  const [filterText, setFilterText] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    <View className="bg-white">
      <SafeAreaView className="h-full w-full">
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View className="flex-row items-center justify-around mt-5">
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
            <View className="bg-gray-300 w-[80%] px-4 py-1 rounded-md flex-row justify-between items-center">
              <TextInput
                placeholder="Search for product"
                className="text-lg block pb-2"
                onChangeText={(text) => {
                  if (!(text.length <= 0)) {
                    setFilteredProducts(
                      products.filter((product) => product.title.includes(text))
                    );
                    setFilterText(text);
                  } else {
                    setFilterText("");
                  }
                }}
              />
              <Pressable>
                <EvilIcons name="search" size={24} color="grey" />
              </Pressable>
            </View>
          </View>
          <ScrollView
            className="mt-12"
            style={{ flex: 1 }}
            contentContainerStyle={{ gap: 40 }}
          >
            {filterText <= 0
              ? null
              : filteredProducts.map((product) => {
                  return (
                    <SearchItem
                      image={product.images[0]}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      category={product.category.name}
                    />
                  );
                })}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
