import { ReactElement, useState } from 'react';
import {
  Dimensions, Image,
  NativeScrollEvent, StyleSheet,
  Text
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../../../theme/theme';

import {
  CarouselContainer,
  DotWrap,
  ScrollViewWrap, SliderWrap, SlideView
} from './styles';

const device_width = Dimensions.get('window').width;

const BANNERS = [
  <Image
    source={require('./assets/banner-1.png')}
    style={{
      resizeMode: 'contain',
      width: device_width,
      height: device_width,
    }}
  />,
  <Image
    source={require('./assets/banner-2.png')}
    style={{
      resizeMode: 'contain',
      width: device_width,
      height: device_width,
    }}
  />,
  <Image
    source={require('./assets/banner-3.png')}
    style={{
      resizeMode: 'contain',
      width: device_width,
      height: device_width,
    }}
  />,
];

export const Carousel = (): ReactElement => {
  const [indexActiveBanner, setIndexActiveBanner] = useState(0);

  function onchange(nativeEvent: NativeScrollEvent): void {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );

      if (slide !== indexActiveBanner) setIndexActiveBanner(slide);
    }
  }

  return (
    <>
      <CarouselContainer testID="carousel">
        <SliderWrap>
          <ScrollViewWrap
            onScroll={({ nativeEvent }): void => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
          >
            {BANNERS.map((Banner, index) => (
              <SlideView testID="carousel-element" key={index}>
                {Banner}
              </SlideView>
            ))}
          </ScrollViewWrap>
        </SliderWrap>
      </CarouselContainer>

      <DotWrap>
        {BANNERS.map((e, index) => (
          <Text
            key={index}
            style={indexActiveBanner === index ? styles.dotActive : styles.dot}
          >
            ●
          </Text>
        ))}
      </DotWrap>
    </>
  );
};

const styles = StyleSheet.create({
  dotActive: {
    marginLeft: 3,
    fontSize: RFValue(18),
    textAlign: 'left',
    color: theme.baseColors.primary.main,
  },
  dot: {
    marginLeft: 3,
    fontSize: RFValue(18),
    textAlign: 'left',
    color: '#E1E1E1',
  },
});
