import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function UpperPart({ navigation }: { navigation: any }) {
  const aboutInfo = {
    name: "MD Khairul Islam",
    Age: 26,
    country: "Bangladesh",
    city: "Dhaka",
    job: "Software Engineer",

  }
  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit
          unde molestiae saepe omnis tenetur distinctio.”
        </Text>

        <View style={styles.authorContainer}>
          <Text style={styles.author}>— MKI UZZAL</Text>
          {/* <TouchableOpacity onPress={() => navigation.navigate('About', { aboutInfo })}>
            <Text style={styles.linkText}>ABOUT HIS</Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <Image source={require('@/assets/refresh.png')} style={styles.refreshIcon} />
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

  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  linkText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '800',
    color: '#ffff',
  },
});
