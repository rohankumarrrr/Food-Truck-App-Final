import React from 'react';
import ListScreen from './Components/ListScreen';
import MapScreen from './Components/MapScreen';
import Description from './Components/Description';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';

const Stack = createStackNavigator();

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

function App() {

  React.useEffect(() => {
    (async () => {
      
      let { foregroundStatus } = await Location.requestForegroundPermissionsAsync();
      let { backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
      if (foregroundStatus !== 'granted' || backgroundStatus !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MapScreen"
        screenOptions={{
          headerShown: false,       // Hide the header globally
          animationEnabled: false,
        }}
      >
        <Stack.Screen 
          name="Description"
          component={Description}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
