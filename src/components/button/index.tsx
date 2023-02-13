import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Text } from "../Text";
import { Container } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
  type?: 'transparent' | 'primary'
}

export function Button({ children, type = 'primary', ...rest }: ButtonProps) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Text size={RFValue(18)}>{children}</Text>
    </Container>
  )
}
