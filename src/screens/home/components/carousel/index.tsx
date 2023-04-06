import { ReactElement, useState } from 'react';
import {
  Dimensions, Image,
  NativeScrollEvent, StyleSheet,
  Text
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '../../../../theme/theme';

import banner1 from './assets/banner-1.png';
import {
  CarouselContainer,
  DotWrap,
  ScrollViewWrap, SliderWrap, SlideView
} from './styles';

const device_width = Dimensions.get('window').width;
console.log(device_width)
console.log(418 * (device_width / 720))
console.log(
  Image.resolveAssetSource(banner1).width,
  Image.resolveAssetSource(banner1).height
)

const BANNERS = [
  <Image
    source={banner1}
    style={{
      width: device_width
    }}
    resizeMode='contain'
  />,
  <Image
    source={banner1}
    style={{
      // resizeMode: 'contain',
      width: device_width,
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
