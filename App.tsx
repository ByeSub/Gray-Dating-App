import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import EmailSignUpScreen from './EmailSignUpScreen';

// 1. 네비게이터 파라미터 타입 정의
export type RootStackParamList = {
  Login: undefined;
  EmailSignUp: undefined;
};

// 2. Stack 생성 시 타입 지정
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EmailSignUp" component={EmailSignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
