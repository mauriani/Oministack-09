import React, { useState, useEffect } from "react";
import { Image, AsyncStorage, View } from "react-native";

import api from "../../services/api";

import logo from "../../assets/logo.png";

import {
  Container,
  BlocoForm,
  Titulo,
  Input,
  BtnEntrar,
  TextBtn,
} from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then((user) => {
      if (user) {
        navigation.navigate("List");
      }
    });
  }, []);

  async function handleSubmit() {
    //email, techs
    const response = await api.post("/sessions", {
      email,
    });
    const { _id } = response.data;

    await AsyncStorage.setItem("user", _id);
    await AsyncStorage.setItem("techs", techs);

    navigation.navigate("List");
  }
  return (
    <Container enable={Platform.OS == "ios"} bahavior="padding">
      <BlocoForm>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Image source={logo} />
        </View>

        <Titulo>Email*</Titulo>
        <Input
          placeholder="Seu-email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Titulo>Tecnologias* </Titulo>
        <Input
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <BtnEntrar onPress={handleSubmit}>
          <TextBtn>ENCONTRAR SPOTS</TextBtn>
        </BtnEntrar>
      </BlocoForm>
    </Container>
  );
};

export default Login;
