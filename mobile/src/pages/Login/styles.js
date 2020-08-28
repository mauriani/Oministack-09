import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e63946;
`;

export const Titulo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #457b9d;
  margin-bottom: 8px;
  font-family: Roboto_400Regular;
`;

export const BlocoForm = styled.View`
  border-width: 1px;
  border-color: #ddd;
  align-self: stretch;
  padding-horizontal: 30px;
  padding: 10px;
  margin-top: 30px;
  margin-horizontal: 10px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #ddd;
  height: 50px;
  border-radius: 10px;
  padding-horizontal: 20px;
  margin-bottom: 20px;
`;

export const BtnEntrar = styled.TouchableOpacity`
  height: 50px;
  background-color: #e63946;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TextBtn = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #f1faee;
  font-family: Roboto_400Regular;
`;
