import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Main } from './src/main';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'BasicSans-700': require('./src/assets/fonts/BasicSans-Bold.otf'),
    'BasicSans-900': require('./src/assets/fonts/BasicSans-Black.otf'),
    'BasicSans-400': require('./src/assets/fonts/BasicSans-Regular.otf')
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style='dark' />
      <Main />
    </>
  );
}
