import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import logOut from "../img/log-out.png";

export default function HeaderRight() {
    const navigation = useNavigation(); 
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
    <Image source={logOut} style={{ marginRight: 10 }} />
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

});
