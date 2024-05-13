/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './constants/colors';
import AllPlaces from './screens/AllPlaces';
import IconButton from './components/Places/UI/IconButton';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary700
          },
          headerTintStyle: Colors.gray700,
          contentStyle: {
            backgroundColor: Colors.gray700
          }

        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton icon="add" size={24} color={tintColor} onPress={() => {
                  navigation.navigate('AddPlace')
                }} />
              )
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AllPlaces}
            options={{ title: 'Add a new Place' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
