import styled from "styled-components/native";

import { heightPercenterToPixel, widthPercenterToPixel } from "../../../../utils/pixelator";

export const Container = styled.View`
  width: 100%;
  height: ${heightPercenterToPixel(8.5)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.padding};

  background: ${({ theme }) => theme.baseColors.primary.main};
`
export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`
export const RightSide = styled.View`
  flex-direction: row;
`
export const UserAvatar = styled.TouchableOpacity`
  width: ${widthPercenterToPixel(11)}px;
  height: ${widthPercenterToPixel(11)}px;

  justify-content: center;
  align-items: center;

  margin-right: 12px;

  border-radius: ${widthPercenterToPixel(5.5)}px;
  background: ${({ theme }) => theme.baseColors.secondary.main};
`
export const DoubtButton = styled.TouchableOpacity``
export const NotificationButton = styled.TouchableOpacity`
  margin-left: 12px;
`
