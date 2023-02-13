import styled from "styled-components/native";

import { heightPercenterToPixel, widthPercenterToPixel } from "../../../../../utils/pixelator";

export const Container = styled.TouchableOpacity`
  width: ${widthPercenterToPixel(43.1)}px;
  height: ${heightPercenterToPixel(13.5)}px;

  margin-top: 20px;
  padding: 12px;

  justify-content: space-between;

  border-radius: 8px;
  background: white;

  elevation: 3.5;
  shadow-color: #000;
  shadow-offset: 0 1px;
  shadow-radius: ${12}px;
  shadow-opacity: 0.1;
`
export const IconWrap = styled.View`
  margin-bottom: 8px;
`
