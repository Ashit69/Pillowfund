import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import  createDrawerNavigator  from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen1 from './src/Screens/WelcomeScreen1/index';
import WelcomeScreen2 from './src/Screens/WelcomeScreen2/index';

import {Provider} from 'react-native-paper';


const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
       
          <Stack.Screen
            options={{headerShown: false}}
            name="WelcomeScreen1"
            component={WelcomeScreen1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="WelcomeScreen2"
            component={WelcomeScreen2}
          />
          
        </Stack.Navigator>
       
      </NavigationContainer>
    </Provider>
  );
}

