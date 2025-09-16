import { View, Text, Button } from 'react-native'
import React from 'react'

const Export = () => {
  return (
    <View>
                <Text>ReceiptsScreen</Text>
                <Button title="Press me" onPress={() => alert('Button pressed!')} />
    </View>
  )
}

export default Export