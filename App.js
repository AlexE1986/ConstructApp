// Библиотеки

import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { ImageBackground, View } from 'react-native';

// Компоненты

import bootstrap from './bootstrap';
import AppNavigation from './src/AppNavigation';
import { STYLES } from './src/types/theme';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(e) => console.log(e)} />
    );
  }

  return (
    <View style={STYLES.GLOBALCONTAINER}>
      <ImageBackground source={require('./assets/background.png')} style={STYLES.BACKGROUND}>
        <AppNavigation />
      </ImageBackground>
    </View>
  );
}