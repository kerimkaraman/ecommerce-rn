import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import SplashCard from "../components/SplashCard";
import { AntDesign } from "@expo/vector-icons";

export default function SplashScreen({ navigation }) {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [data, setData] = useState([]);

  async function getData() {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <View className="bg-[#D55209] w-full h-full items-center justify-center">
      <SafeAreaView className="w-full h-full gap-y-12">
        <View className="items-end px-12">
          <Pressable onPress={() => navigation.navigate("Homepage")}>
            <AntDesign name="close" size={24} color="white" />
          </Pressable>
        </View>
        <View className="h-full">
          <Carousel
            data={data}
            layout="tinder"
            layoutCardOffset={20}
            sliderWidth={width}
            sliderHeight={height}
            itemWidth={300}
            windowSize={1}
            renderItem={({ item }) => (
              <SplashCard
                key={item.id}
                id={item.id}
                image={item.images[0]}
                name={item.title}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
