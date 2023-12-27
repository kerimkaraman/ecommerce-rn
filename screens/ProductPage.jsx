import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ProductPage({ route, navigation }) {
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
    <View>
      {console.log(product)}
      <SafeAreaView>
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <Text>{product.title}</Text>
        </View>
      </SafeAreaView>
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
