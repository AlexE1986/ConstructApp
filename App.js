// Библиотеки

import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';

// Компоненты

import bootstrap from './bootstrap';
import AppNavigation from './src/AppNavigation';

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
    <AppNavigation />
  );
}