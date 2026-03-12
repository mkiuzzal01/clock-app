import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface LowerPartProps {
  isExpended?: boolean;
  onPress: () => void;
}

export default function LowerPart({ isExpended, onPress }: LowerPartProps) {
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

      {/* button action */}
      <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>
            {isExpended ? 'LESS' : 'MORE'}
          </Text>
          <Image source={isExpended ? require('../../../assets/arrow-up.png') : require('../../../assets/arrow-down.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
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
    color: '#ffffffd3',
  },

  timeZone: {
    fontSize: 18,
    fontWeight: '500',
  },

  location: {
    fontSize: 18,
    letterSpacing: 1,
    color: '#fff',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 4,
    marginTop: 30,
    borderRadius: 30,
    width: 115,
    height: 40,
  },
  buttonText: {
    letterSpacing: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  arrowIcon: {
    width: 30,
    height: 30,
  },
});
