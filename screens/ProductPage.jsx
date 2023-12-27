import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Image } from "react-native";
import { Rating } from "@kolking/react-native-rating";

export default function ProductPage({ route, navigation }) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = route.params;

  async function getData() {
    await fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .then(setIsLoading(false));
  }

  useEffect(() => {
    getData();
  }, []);

  return isLoading ? null : (
    <View className="bg-white" style={{ flex: 1 }}>
      {console.log(product)}
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView>
          <View className="mt-4 flex-row px-4 gap-x-2 items-center justify-between">
            <Pressable onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <Text className="text-xl font-semibold">{product.title}</Text>
            <View></View>
          </View>
          <View className="mt-6 border-b border-gray-300 pb-6">
            <Carousel
              data={product.images}
              renderItem={({ item }) => {
                return (
                  <Image
                    style={{ objectFit: "contain" }}
                    className="w-full h-[500px]"
                    source={{ uri: item }}
                  />
                );
              }}
              sliderWidth={width}
              sliderHeight={500}
              itemHeight={500}
              itemWidth={width}
              windowSize={1}
            />
          </View>
          <View className="mt-6">
            <Text className="font-semibold text-2xl text-center">
              {product.title}
            </Text>
          </View>
          <View className="px-6 mt-4">
            <Text className="font-thin text-lg">{product.description}</Text>
          </View>
          <View className="mt-12 flex-row items-center justify-between">
            <Text>{product.price} $</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

/* 
<View>
  <SafeAreaView>
    <View>
      <Pressable onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
    </View>
  </SafeAreaView>
</View>
*/
