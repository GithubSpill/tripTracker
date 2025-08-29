import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

export default function TripsScreen() {

    return (
        <SafeAreaView>
            <View>
                <Text>Trips</Text>
                <Button
                    title="Press me"
                    onPress={() => {
                        alert('You pressed me');
                    }}
                />
            </View>
        </SafeAreaView>
    );
}