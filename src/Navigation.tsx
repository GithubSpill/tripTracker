import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabGroup from './navigation/TabGroup';
import StartTrip from './screens/timer/StartTrip';
import EndTrip from './screens/timer/EndTrip';
import Dashboard from './screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* Single root navigator: Tabs are a stacked screen so other screens can be pushed above them */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabGroup} />
        <Stack.Screen name="StartTrip" component={StartTrip} />
        <Stack.Screen name="EndTrip" component={EndTrip} />
        {/* Optional: keep Dashboard only if you need it as a standalone stack screen */}
        <Stack.Screen name="Home" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}