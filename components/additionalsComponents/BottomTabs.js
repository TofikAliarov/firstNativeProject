import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import RegistrationScreen from "../screens/RegistrationScreen";
import React from "react";
import LoginScreen from "../screens/LoginScreen";


export default function BottomTabs() {
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator>
        <Tab.Screen name="n" component={LoginScreen} />
        <Tab.Screen name="s" component={RegistrationScreen} />
      </Tab.Navigator>
  );
}
