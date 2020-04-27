import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Navigation from './Navigation';
import colors from './styles/colors';
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.PRIMARY} />

      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
