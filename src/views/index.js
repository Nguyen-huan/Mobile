import React, { Component } from 'react';
import { Text, SafeAreaView, View } from "react-native";
import Login from './Login';
import HomePage from './home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default RootComponent = () => {
  return (
    // <Login />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomePage} />

      </Stack.Navigator>
    </NavigationContainer >
  )
}