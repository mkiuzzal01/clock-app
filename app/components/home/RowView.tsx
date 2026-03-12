import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface RowViewProps {
  label: string;
  value: string;
}

export default function RowView({ label, value }: RowViewProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  label: {
    letterSpacing: 2,
    fontSize: 14,
    fontWeight: 'semibold',
    color: '#000',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
