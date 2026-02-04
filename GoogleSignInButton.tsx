import React, { useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import app from './firebaseConfig';

export default function GoogleSignInButton() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '94297704781-629i5ooadbpksb4gac2to4kusopdk8oe.apps.googleusercontent.com', // 하나만 사용
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const auth = getAuth(app);
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          // 로그인 성공 처리
        })
        .catch((error) => {
          // 에러 처리
        });
    }
  }, [response]);

  return (
    <TouchableOpacity onPress={() => promptAsync()} disabled={!request}>
      <Image source={require('./assets/google.png')} style={{ width: 48, height: 48 }} />
    </TouchableOpacity>
  );
}