import React from "react";
import {
  StyleSheet,
} from "react-native";
import RegistrationScreen from "./components/screens/RegistrationScreen";
import LoginScreen from "./components/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/screens/Home";
import logOut from "./components/img/log-out.png";
import HeaderRight from "./components/additionalsComponents/HeaderRight";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function App() {
  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: null,
            headerRight: () => (
              <HeaderRight/>
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
