import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import UpperPart from "../components/home/UpperPart";
import LowerPart from "../components/home/LowerPart";
import ExpendedView from "../components/home/ExpendedView";

export default function Home({ navigation }: { navigation: any }) {
  const [isExpended, setIsExpended] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/light-bg.png")}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.section}>
          {!isExpended && <UpperPart navigation={navigation} />}
          <LowerPart isExpended={isExpended} onPress={() => setIsExpended(!isExpended)} />
          {isExpended && <ExpendedView />}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  section: { flex: 1, justifyContent: 'space-between' },
});
