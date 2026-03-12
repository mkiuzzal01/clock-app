import { View, Text, Image, StyleSheet } from 'react-native';

export default function UpperPart() {
  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit
          unde molestiae saepe omnis tenetur distinctio.”
        </Text>

        <Text style={styles.author}>— MKI UZZAL</Text>
      </View>

      <Image source={require('../../../assets/refresh.png')} style={styles.refreshIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  quoteContainer: {
    flex: 1,
    paddingRight: 15,
  },

  quote: {
    fontSize: 20,
    lineHeight: 26,
    color: '#ffff',
  },

  author: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '800',
    color: '#ffff',
  },

  refreshIcon: {
    width: 36,
    height: 36,
  },
});
