import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./screens/Homepage";
import SplashScreen from "./screens/SplashScreen";
import SearchScreen from "./screens/SearchScreen";
import ProductPage from "./screens/ProductPage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          options={{
            headerShown: false,
          }}
          component={SplashScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Homepage"
          component={Homepage}
        />
        <Stack.Screen
          name="SearchScreen"
          options={{
            headerShown: false,
          }}
          component={SearchScreen}
        />
        <Stack.Screen
          name="ProductPage"
          options={{
            headerShown: false,
          }}
          component={ProductPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
