import { View, Text, Image, Dimensions, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import SplashCard from "../components/SplashCard";
import { AntDesign } from "@expo/vector-icons";

export default function SplashScreen() {
  const width = Dimensions.get("window").width;
  const [data, setData] = useState([]);

  async function getData() {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => setData(json));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <View className="bg-[#D55209] w-full h-full items-center justify-center">
      <SafeAreaView className="w-full h-full gap-y-12">
        <View className="items-end px-12">
          <AntDesign name="close" size={24} color="white" />
        </View>
        <View className="">
          <Carousel
            data={data}
            layout="tinder"
            layoutCardOffset={`20`}
            sliderWidth={width}
            itemWidth={300}
            windowSize={1}
            renderItem={({ item }) => (
              <SplashCard image={item.image} name={item.title} />
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
