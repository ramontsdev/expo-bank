import styled, { css } from "styled-components/native";

import { heightPercenterToPixel } from "../../utils/pixelator";

type ContainerProps = {
  type?: 'transparent' | 'primary'
}
export const Container = styled.TouchableOpacity.attrs(({ activeOpacity }) => ({
  activeOpacity: activeOpacity || 0.7
})) <ContainerProps>`
  width: 90%;
  height: 56px;
  height: ${heightPercenterToPixel(7.4)}px;
  background: ${({ theme }) => theme.baseColors.secondary.main};

  justify-content: center;
  align-items: center;

  border-radius: 40px;

  ${({ type }) => type === 'transparent' && css`
    width: 90%;
    height: 32px;

    background-color: transparent;
  `}
`
