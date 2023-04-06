import styled from 'styled-components/native';

import { DEVICE_WINDOW_WIDTH } from '../../../../utils/dimensions';

export const CarouselContainer = styled.View`
  width: ${DEVICE_WINDOW_WIDTH}px;

  height: ${418 * (DEVICE_WINDOW_WIDTH / 720)}px;

  background-color: ${({ theme }) => theme.baseColors.primary.main};
`;
export const SliderWrap = styled.View`
  background-color: red;
`;

export const SlideView = styled.View`
  width: ${DEVICE_WINDOW_WIDTH}px;
  justify-content: center;
`;

export const ScrollViewWrap = styled.ScrollView``;

export const DotWrap = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: center;

  background-color: white;
`;
