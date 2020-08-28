import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  padding-top: ${60 + getStatusBarHeight(true)}px;
`;

export const ImageLogo = styled.Image`
  height: 35px;
  resize-mode: contain;
  align-self: center;
`;
