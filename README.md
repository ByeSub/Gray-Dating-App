# Gray Dating App

React Native 기반 데이팅 앱 프로젝트입니다.

## 폴더 구조

- `App.tsx`: 앱 진입점
- `LoginScreen.tsx`, `EmailSignUpScreen.tsx`: 인증 관련 स्क्रीन
- `GoogleSignInButton.tsx`: 구글 로그인 버튼 컴포넌트
- `firebaseConfig.ts`: Firebase 설정
- `assets/`: 이미지 에셋

## 사전 준비

- Node.js 18+
- Yarn 또는 npm

## 설치

```bash
# Yarn
yarn

# npm
npm install
```

## 실행

```bash
# Expo 사용 시
npx expo start
```

## 환경 설정

- Firebase 프로젝트를 준비하고 `firebaseConfig.ts`를 자신의 값으로 설정하세요.
- Google OAuth 클라이언트 시크릿 파일은 레포에 포함되지 않도록 관리하세요.

## 라이선스

MIT
