import React from 'react';
import { View, Text, Button } from 'react-native';

export default function EndTrip({ navigation }: { navigation: any }) {
  const goToDashboardAndClearStack = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'MainTabs',
          state: {
            routes: [{ name: 'Dashboard' }], // adjust 'Dashboard' to your tab screen name if different
          },
        },
      ],
    });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>End Trip</Text>
      <Button title="Go to Dashboard" onPress={goToDashboardAndClearStack} />
    </View>
  );
}