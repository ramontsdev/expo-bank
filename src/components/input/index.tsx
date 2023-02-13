import { useState } from "react";
import {
  Animated, NativeSyntheticEvent, StyleProp,
  TextInputFocusEventData, TextInputProps, ViewStyle
} from "react-native";
import { useTheme } from "styled-components/native";
import { heightPercenterToPixel } from "../../utils/pixelator";

import { Container, TextError, TextInput, TextLabel, Wrapper } from "./styles";

type InputProps = TextInputProps & {
  label?: string;
  onFocus?: ((e?: NativeSyntheticEvent<TextInputFocusEventData>) => void);
  onBlur?: ((e?: NativeSyntheticEvent<TextInputFocusEventData>) => void);
  style?: StyleProp<ViewStyle>;
  hasError?: boolean;
  error?: { hasError: boolean; message: string; }
}
export function Input({ label, onFocus, onBlur, style, error, ...rest }: InputProps) {
  const [hasText, setHasText] = useState(false);
  const [inFocus, setInFocus] = useState(false)
  const [topAnimated] = useState(new Animated.Value(0))

  const { baseColors } = useTheme()

  function handleChange(text: string) {
    if (text) {
      setHasText(true)
    } else {
      setHasText(false)
    }
  }

  function handleFocus() {
    Animated.timing(topAnimated, {
      // toValue: -30,
      toValue: heightPercenterToPixel(-4),
      duration: 250,
      useNativeDriver: false
    })
      .start()

    onFocus?.();
    setInFocus(true)
  }

  function handleBlur() {
    if (!hasText) {
      Animated.timing(topAnimated, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false
      })
        .start()
    }

    onBlur?.()
    setInFocus(false)
  }
  return (
    <Container>
      <Wrapper inFocus={inFocus} error={error?.hasError}>
        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
          onChange={(e) => handleChange(e.nativeEvent.text)}
        />
        <TextLabel
          color={error?.hasError ? baseColors.danger.main : baseColors.gray.light}
          style={{
            transform: [{ translateY: topAnimated }]
          }}
        >
          {label}
        </TextLabel>
      </Wrapper>
      <TextError visible={error?.hasError}>{error?.message}</TextError>
    </Container>
  )
}
