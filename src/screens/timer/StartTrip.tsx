import { View, Text, Button } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function StartTrip({ navigation }: { navigation: any }) {
  return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Start Trip</Text>
        <Button title="End Trip" onPress={() => navigation.navigate('EndTrip')} />
      </View>
  );
}