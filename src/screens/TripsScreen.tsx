import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

// Define your stack param list
type RootStackParamList = {
    StartTrip: undefined;
    // Add other screens here if needed
};

export default function TripsScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView>
            <View>
                <Text>Trips</Text>
                <Button title="Press me" onPress={() => navigation.navigate('StartTrip')} />
            </View>
        </SafeAreaView>
    );
}