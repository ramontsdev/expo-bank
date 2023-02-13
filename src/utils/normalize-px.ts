import { Dimensions, PixelRatio } from 'react-native';

// const normalizePx = (percenter: number): number => RFValue(percenter);

const { width: entireScreenWidth, height: heightScreen } = Dimensions.get('screen');
// px = dp * scaleFactor
// DP=PX/ScaleFactor
function normalizePx(px: number) {
  console.warn(`${entireScreenWidth.toFixed(1)}x${heightScreen.toFixed(0)}`)

  console.warn(PixelRatio)

  return entireScreenWidth / heightScreen * px / 1.72
}

export { normalizePx };
