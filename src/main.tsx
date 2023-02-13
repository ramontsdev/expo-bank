import { StatusBar } from 'expo-status-bar';
import {
  Platform, SafeAreaView as NativeSafeAreaView,
  StatusBar as NativeStatusBar
} from 'react-native';
import styled, { css, ThemeProvider } from 'styled-components/native';
import { Routes } from './routes';

import { theme } from './theme/theme';

export function Main() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.baseColors.primary.main} style="dark" />
      <SafeAreaView>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const SafeAreaView = styled(NativeSafeAreaView)`
  flex: 1;
  ${Platform.OS === 'android' && css`
    margin-top: ${NativeStatusBar.currentHeight}px;
  `}
`
