import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import image from "../img/PhotoBG.png";

export default function RegistrationScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Регистрация</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Логин"
            value={login}
            onChangeText={setLogin}
          />
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            value={mail}
            onChangeText={setMail}
          />
          <TextInput
            style={styles.input}
            label={false}
            placeholder="Пароль"
            value={password}
            returnKeyType="go"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text style={styles.text} onPress={() => navigation.navigate("Login")}>
          Уже есть аккаунт? Войти
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text:{
    marginTop: 16,
  },
  form: {
    marginTop: 30,
  },
  input: {
    margin: 8,
    paddingLeft: 16,
    height: 50,
    width: 343,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "500",
    alignSelf: "center",
  },
  appButtonContainer: {
    marginTop: 35,
    width: "90%",
    elevation: 8,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "normal",
    alignSelf: "center",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "65%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});
