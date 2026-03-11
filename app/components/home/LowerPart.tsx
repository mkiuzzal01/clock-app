import { View, Text, Image, StyleSheet } from 'react-native';

export default function LowerPart() {
  return (
    <View style={styles.container}>
      {/* Weather Section */}
      <View style={styles.weatherContainer}>
        <Image source={require('../../../assets/sun.png')} style={styles.icon} />
        <Text style={styles.weatherText}>GOOD MORNING</Text>
      </View>

      {/* Time Section */}
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          11:37 <Text style={styles.timeZone}>BST</Text>
        </Text>
        <Text style={styles.location}>IN LONDON, UK</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  weatherText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },

  timeContainer: {
    alignItems: 'flex-start',
  },

  time: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#fff',
  },

  timeZone: {
    fontSize: 18,
    fontWeight: '500',
  },

  location: {
    marginTop: 5,
    fontSize: 18,
    letterSpacing: 1,
    color: '#fff',
  },
});
