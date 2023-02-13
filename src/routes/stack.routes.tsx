import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home';

import { SignInScreen } from '../screens/sign-in';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName='SignInScreen'
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name='SignInScreen'
        component={SignInScreen}
      />

      <Screen
        name='HomeScreen'
        component={HomeScreen}
      />
    </Navigator>
  )
}
