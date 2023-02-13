import styled from 'styled-components/native';

import { DEVICE_WINDOW_WIDTH } from '../../../../utils/dimensions';
import { heightPercenterToPixel } from '../../../../utils/pixelator';

export const CarouselContainer = styled.View`
  width: ${DEVICE_WINDOW_WIDTH}px;
  height: ${heightPercenterToPixel(30)}px;

  justify-content: center;

  background-color: ${({ theme }) => theme.baseColors.primary.main};
`;
export const SliderWrap = styled.View``;

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
