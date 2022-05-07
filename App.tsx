import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, Share, StyleSheet, Text, TextInput, View } from 'react-native';
import Drink from './screens/Drink';
import Generating from './screens/Generating';
import Landing from './screens/Landing';
import Home from './screens/Landing';
import Results from './screens/Results';
import Setup from './screens/Setup';
import Persons from './screens/Setup';
import ShareScreen from './screens/ShareScreen';
import Survey from './screens/Survey';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="Generating" component={Generating} />
        <Stack.Screen name="Drink" component={Drink} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="ShareScreen" component={ShareScreen} />
        <Stack.Screen name="Survey" component={Survey} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
