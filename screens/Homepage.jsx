import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";

export default function Homepage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getAllData() {
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));

    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .then(setIsLoading(false));
  }

  useEffect(() => {
    getAllData();
  }, []);

  return isLoading ? null : (
    <View>
      {console.log(categories)}
      <SafeAreaView>
        <View></View>
      </SafeAreaView>
    </View>
  );
}
