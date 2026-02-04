import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// 체크박스는 expo-checkbox 또는 @react-native-community/checkbox 등으로 대체 가능
import Checkbox from 'expo-checkbox';


const EmailSignUpScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [agree, setAgree] = useState(true);

  return (
    <View style={styles.container}>
      {/* 상단 바 */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>이메일 회원가입</Text>
        <TouchableOpacity>
          {/* <Image source={require('./assets/help.png')} style={styles.helpIcon} /> */}
        </TouchableOpacity>
      </View>

      {/* 입력 폼 */}
      <TextInput
        style={styles.input}
        placeholder="이메일을 입력하세요."
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="6 - 20자 이내의 암호"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* 캡차 영역 */}
      <View style={styles.captchaRow}>
        {/* <Image source={require('./assets/captcha.png')} style={styles.captchaImg} /> */}
        <TextInput
          style={styles.captchaInput}
          placeholder="인증문자를 입력하세요"
          placeholderTextColor="#aaa"
          value={captcha}
          onChangeText={setCaptcha}
        />
      </View>

      {/* 체크박스 */}
      <View style={styles.checkboxRow}>
        <Checkbox value={agree} onValueChange={setAgree} color="#ff4fcf" />
        <Text style={styles.checkboxText}>계정, 구독 및 이벤트 정보에 대한 안내를 받겠습니다.</Text>
      </View>

      {/* 구분선 */}
      <View style={styles.dividerRow}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>아리 다른 방법을 사용하여 회원가입 하세요.</Text>
        <View style={styles.divider} />
      </View>

      {/* 소셜/폰 등록 */}
      <TouchableOpacity>
        <Text style={styles.phoneLink}>핸드폰 번호 등록</Text>
      </TouchableOpacity>
      <View style={styles.socialRow}>
        <TouchableOpacity>
          <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/x.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      {/* 다음 버튼 */}
      <TouchableOpacity style={styles.nextButton} disabled>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  backArrow: {
    color: '#fff',
    fontSize: 28,
    marginRight: 12,
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  helpIcon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
  },
  input: {
    backgroundColor: '#181818',
    color: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  captchaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  captchaImg: {
    width: 90,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  captchaInput: {
    flex: 1,
    backgroundColor: '#181818',
    color: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkboxText: {
    color: '#ccc',
    fontSize: 14,
    marginLeft: 8,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
  },
  dividerText: {
    color: '#888',
    fontSize: 12,
    marginHorizontal: 8,
  },
  phoneLink: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 16,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  socialIcon: {
    width: 48,
    height: 48,
    marginHorizontal: 16,
  },
  nextButton: {
    backgroundColor: '#444',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
    opacity: 0.5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});