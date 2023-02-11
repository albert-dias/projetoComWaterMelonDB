import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from '@expo-google-fonts/roboto';

import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './global/styles/theme';
import { SignIn } from './screens/SignIn';
import { Home } from './screens/Home';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return null
  }
  SplashScreen.hideAsync();
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}