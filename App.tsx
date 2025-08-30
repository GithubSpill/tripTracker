import React, { use } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/Navigation';
import { useColorScheme } from 'react-native';

export default function App() {

  const colorScheme = useColorScheme();
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
}