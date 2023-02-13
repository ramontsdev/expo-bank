import { Animated } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

import { widthPercenterToPixel } from "../../utils/pixelator";

export const Container = styled.View`
  width: 90%;
  align-items: stretch;
`;
type WrapperProps = {
  inFocus?: boolean;
  error?: boolean;
}
export const Wrapper = styled.View<WrapperProps>`
  align-items: stretch;

  border-bottom-width: 1px;
  border-bottom-color: ${({ inFocus, error, theme }) => {
    if (inFocus && !error) {
      return theme.baseColors.primary.main
    }
    if (error) {
      return theme.baseColors.danger.main
    }

    return theme.baseColors.gray.main
  }};
`
export const TextInput = styled.TextInput`
  padding: 0 ${widthPercenterToPixel(6.2)}px;
  z-index: 2;

  font-family: ${({ theme }) => theme.fonts.primary.weight.normal};
  font-size: ${RFValue(20)}px;
`
type TextLabelProps = {
  color?: string;
}

export const TextLabel = styled(Animated.Text) <TextLabelProps>`
  position: absolute;

  margin-left: ${widthPercenterToPixel(6.2)}px;
  z-index: 1;

  font-family: ${({ theme }) => theme.fonts.primary.weight.normal};
  font-size: ${RFValue(16)}px;

  color: ${({ theme, color }) => color ? color : theme.baseColors.gray.light};
`
type TextErrorProps = {
  visible?: boolean;
}
export const TextError = styled.Text<TextErrorProps>`
  color: ${({ theme }) => theme.baseColors.danger.main};
  opacity: 0;
  margin-left: ${widthPercenterToPixel(6.2)}px;

  ${({ visible }) => visible && css`
    opacity: 1;
  `}
`
