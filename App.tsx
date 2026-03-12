import { ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './pages/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Page() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  // const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  const drawer = createDrawerNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>

        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle:{
            backgroundColor:"orange"
          }
         }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator> */}

        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator> */}

        <drawer.Navigator>
          <drawer.Screen name="Home" component={Home} />
          <drawer.Screen name="Profile" component={Profile} />
        </drawer.Navigator>

      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
