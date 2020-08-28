import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${60 + getStatusBarHeight(true)}px;
`;

export const ImageLogo = styled.Image`
  height: 35px;
  resize-mode: contain;
  align-self: center;
`;

export const Bloco = styled.View`
  margin-horizontal: 10px;
`;

export const Titulo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #457b9d;
  margin-bottom: 8px;
  font-family: Roboto_400Regular;
  margin-top: 30px;
`;

export const BlocoForm = styled.View`
  align-self: stretch;
  padding-horizontal: 30px;
  margin-top: 30px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #111;
  padding: 0 16px;
  height: 50px;
  border-radius: 10px;
  padding-horizontal: 20px;
  margin-bottom: 20px;
`;

export const ButtonSolicitar = styled.TouchableOpacity`
  height: 50px;
  background-color: #e63946;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
`;

export const ButtonCancelar = styled.TouchableOpacity`
  height: 50px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
`;

export const TextBtn = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #f1faee;
  font-family: Roboto_400Regular;
`;
