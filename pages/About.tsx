import { View, Text } from 'react-native'
import React from 'react'

export default function About({ route }: { route: any }) {
  const { aboutInfo } = route?.params;
  return (
    <View>
      <Text>About</Text>
      <Text>{aboutInfo?.name}</Text>
      <Text>{aboutInfo?.Age}</Text>
      <Text>{aboutInfo?.country}</Text>
      <Text>{aboutInfo?.city}</Text>
      <Text>{aboutInfo?.job}</Text>
    </View>
  )
}
