import { StyleSheet, View } from 'react-native'
import React from 'react'
import RowView from './RowView';

export default function ExpendedView() {
  return (
    <View style={styles.container}>
      <RowView label="CURRENT TIME ZONE" value="EUROPE/LONDON" />
      <RowView label="DAY OF THE YEAR" value="295" />
      <RowView label="DAY OF THE WEEK" value="5" />
      <RowView label="DAY OF THE NUMBER" value="42" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#fff',
    opacity: 0.8,
  },

});
