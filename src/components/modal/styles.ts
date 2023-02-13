import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height } = Dimensions.get('window')

export const ModalContainer = styled.TouchableOpacity`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);

  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.View`
  width: 85%;
  height: 280px;

  justify-content: center;
  align-items: center;

  position: absolute;
  align-self: center;
  top: ${(50 / 100) * height / 1.7}px;
`
export const CloseButton = styled.TouchableOpacity`
  width: 80px;
  height: 20px;

  justify-content: center;
  align-items: center;
  align-self: flex-end;
`
export const TopBar = styled.View`
  width: 100%;
  height: 8px;

  position: absolute;
  top: 0;

  background: ${({ theme }) => theme.baseColors.danger.main};
`
export const ModalBody = styled.View`
  width: 100%;
  height: 280px;

  border-radius: 8px;

  overflow: hidden;

  background: #fff;
`
export const ModalContent = styled.View`
  flex: 1;

  align-items: center;
`
export const IconWrap = styled.View`
  margin-top: 32px;
  margin-bottom: 24px;
`
