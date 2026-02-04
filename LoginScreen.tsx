import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from './App';
import GoogleSignInButton from './GoogleSignInButton';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    Alert.alert('로그인 시도', `이메일: ${email}\n비밀번호: ${password}`);
  };

  return (
    <ImageBackground
      source={require('./assets/bg.jpg')} // 배경 이미지 파일 경로에 맞게 수정
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.centerBox}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.slogan}>Live Your Life</Text>
      </View>

      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => navigation.navigate('EmailSignUp')}
      >
        <Text style={styles.joinButtonText}>가입하기</Text>
      </TouchableOpacity>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/x.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <GoogleSignInButton />

      <Text style={styles.agreeText}>
        Facebook/X/Google+에 아무런 게시물도 올리지 않습니다.{"\n"}
        가입과 동시에 귀하는 당사의{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://your-terms-url.com')}>이용약관</Text>
        {' '}및{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://your-privacy-url.com')}>개인정보 보호정책</Text>
        에 동의합니다.
      </Text>

      <TouchableOpacity>
        <Text style={styles.problemText}>로그인에 문제가 있습니까?</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  centerBox: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 80,
  },
  logo: {
    width: 140,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  slogan: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  joinButton: {
    width: '80%',
    backgroundColor: 'linear-gradient(90deg, #ff6fd8 0%, #3813c2 100%)', // 실제 그라디언트는 expo-linear-gradient 사용 권장
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'center',
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginGuide: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  lastLoginButton: {
    backgroundColor: '#e07be0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignSelf: 'center',
    marginBottom: 16,
  },
  lastLoginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  socialButton: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
  },
  socialIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  agreeText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 24,
    marginBottom: 8,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#ffd700',
  },
  problemText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 50,
  },
});

export default LoginScreen;