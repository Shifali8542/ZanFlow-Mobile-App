import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import LoginScreen from '../screens/LoginScreen';

const RootNavigator = () => {
  const isLoggedIn = true; // later from auth store

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
