import { ActivityIndicator, ImageBackground, StyleSheet, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SafeAreaView } from 'react-native-safe-area-context';
import UpperPart from './components/home/UpperPart';
import LowerPart from './components/home/LowerPart';
import ExpendedView from './components/home/ExpendedView';
import { useState } from 'react';

export default function Page() {
  const [isExpended, setIsExpended] = useState(false);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/light-bg.png')}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.section}>
          {
            !isExpended && <UpperPart />
          }
          <LowerPart isExpended={isExpended} onPress={() => setIsExpended(!isExpended)} />
          {
            isExpended && <ExpendedView />
          }
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  section: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
