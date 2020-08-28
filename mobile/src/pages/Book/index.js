import React, { useState } from "react";
import { Alert, AsyncStorage, TouchableOpacity } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import api from "../../services/api";
import logo from "../../assets/logo.png";

import {
  Container,
  ImageLogo,
  Bloco,
  Titulo,
  Input,
  ButtonSolicitar,
  ButtonCancelar,
  TextBtn,
} from "./styles";

const Book = ({ route, navigation }) => {
  const [date, setDate] = useState("");

  const id = route.params?.id;

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem("user");

    await api.post(
      `/spots/${id}/bookings`,
      {
        date,
      },
      {
        headers: { user_id },
      }
    );

    Alert.alert("Solicitação de reserva enviada.");

    navigation.navigate("List");
  }

  function handleNavigateBack() {
    navigation.navigate("List");
  }

  return (
    <Container>
      <ImageLogo source={logo} />
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon name="arrow-left" size={30} color="#457b9d" />
      </TouchableOpacity>
      <Bloco>
        <Titulo>DATA DE INTERESSE *</Titulo>
        <Input
          placeholder="Qual data você quer reservar ?"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="words"
          value={date}
          onChangeText={setDate}
        />
        <ButtonSolicitar onPress={handleSubmit}>
          <TextBtn>Solicitar</TextBtn>
        </ButtonSolicitar>
      </Bloco>
    </Container>
  );
};

export default Book;
