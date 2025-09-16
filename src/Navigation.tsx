import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabGroup from './navigation/TabGroup'; // Import the extracted TabGroup

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}