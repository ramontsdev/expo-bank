import styled, { css } from "styled-components/native";
import { heightPercenterToPixel, widthPercenterToPixel } from "../../utils/pixelator";

type DocumentComponentProps = {
  inFocus?: boolean;
}
export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;

  background: #fff;
`;
export const Header = styled.View`
  width: 100%;
`;
export const LogoWrap = styled.View<DocumentComponentProps>`
  margin-top: 75px;
  margin-top: ${heightPercenterToPixel(10)}px;
  margin-left: 35px;
  margin-left: ${widthPercenterToPixel((9))}px;

  ${({ inFocus }) => inFocus && css`
    margin-top: 24px;
    margin-top: ${heightPercenterToPixel(3.2)}px;
    margin-left: 35px;
    margin-left: ${widthPercenterToPixel(9)}px;
  `}
`
export const WelcomeWrap = styled.View<DocumentComponentProps>`
  margin-top: 70px;
  margin-top: ${heightPercenterToPixel(9.25)}px;
  margin-left: 35px;
  margin-left: ${widthPercenterToPixel(9)}px;

  ${({ inFocus }) => inFocus && css`
    margin-top: 35px;
    margin-top: ${heightPercenterToPixel(4.65)}px;
    margin-bottom: 0px;
  `}
`
export const Body = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;

  align-items: center;
`
export const TextInputWrap = styled.View <DocumentComponentProps>`
  width: 100%;
  align-items: center;

  margin-top: 170px;
  margin-top: ${heightPercenterToPixel(22.4)}px;

  ${({ inFocus }) => inFocus && css`
    margin-top: 135px;
    margin-top: ${heightPercenterToPixel(17.8)}px;
    margin-bottom: -20px;
    margin-bottom: ${-heightPercenterToPixel(2.65)}px;
  `}
`
export const DocumentWrap = styled.View`
  width: 100%;

  margin-top: 50px;
  margin-top: ${heightPercenterToPixel(6.6)}px;
  padding-left: 35px;
  padding-left: ${widthPercenterToPixel(9)}px;
`
export const PasswordInputWrap = styled.View <DocumentComponentProps>`
  width: 100%;
  align-items: center;

  margin-top: 70px;
  margin-top: ${heightPercenterToPixel(9.25)}px;

  ${({ inFocus }) => inFocus && css`
    position: relative;
    bottom: -48px;
    bottom: ${-heightPercenterToPixel(6.35)}px;

    margin-top: 0px;
  `}
`
export const Actions = styled.View<DocumentComponentProps>`
  width: 100%;
  height: 96px;
  height: ${heightPercenterToPixel(12.65)}px;

  position: absolute;
  bottom: 24px;
  bottom: ${heightPercenterToPixel(3.2)}px;

  align-items: center;
  justify-content: space-between;

  ${({ inFocus }) => inFocus && css`
    position: relative;
    bottom: -64px;
    bottom: ${-heightPercenterToPixel(8.45)}px;
  `}
`
