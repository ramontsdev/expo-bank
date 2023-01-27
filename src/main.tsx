import { ThemeProvider } from "styled-components/native";
import { SignInScreen } from "./screens/sign-in";
import { theme } from "./theme/theme";

export function Main() {
  return (
    <ThemeProvider theme={theme}>
      <SignInScreen />
    </ThemeProvider>
  )
}
