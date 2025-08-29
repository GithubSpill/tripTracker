import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ReceiptsScreen() {
  return (
    <SafeAreaView>
        <View>
            <Text>ReceiptsScreen</Text>
            <Button title="Press me" onPress={() => alert('Button pressed!')} />
        </View>
    </SafeAreaView>
  )
}