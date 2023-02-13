import { Dimensions, PixelRatio } from "react-native";

export function pixelator(value: number) {
  // retorna o valor em pixel
  return PixelRatio.roundToNearestPixel(value) * PixelRatio.get()
}

export function heightPercenterToPixel(percenter: number) {
  return percenter / 100 * Dimensions.get('window').height
}
export function widthPercenterToPixel(percenter: number) {
  return percenter / 100 * Dimensions.get('window').width
}
