# Gray Dating App

React Native 기반 데이팅 앱 프로젝트입니다. 간단한 인증 플로우(로그인/회원가입)와 Google 로그인 버튼 컴포넌트를 포함합니다.

> **목표**: 빠르게 실행 가능한 UI 프로토타입을 만들고, Firebase/Google OAuth 연동을 확장할 수 있도록 구성했습니다.

---

## ✨ 주요 기능

- 로그인/회원가입 화면
- Google 로그인 버튼 컴포넌트
- Firebase 설정 분리
- 에셋(로고/배경/소셜 아이콘) 포함

---

## 🧩 기술 스택

- React Native
- TypeScript
- Expo (실행 기준)
- Firebase (설정 파일 분리)

---

## 📂 폴더 구조

```
.
├─ App.tsx
├─ LoginScreen.tsx
├─ EmailSignUpScreen.tsx
├─ GoogleSignInButton.tsx
├─ firebaseConfig.ts
├─ assets/
│  ├─ bg.jpg
│  ├─ logo.png
│  ├─ google.png
│  ├─ facebook.png
│  └─ x.png
└─ ...
```

---

## ✅ 사전 준비

- Node.js 18+
- Yarn 또는 npm

---

## 📦 설치

```bash
# Yarn
yarn

# npm
npm install
```

---

## ▶️ 실행

```bash
# Expo 사용 시
npx expo start
```

---

## 🔐 환경 설정

1. Firebase 프로젝트를 생성합니다.
2. `firebaseConfig.ts`에 Firebase 설정 값을 입력합니다.
3. Google OAuth 클라이언트 시크릿 파일은 **레포에 포함되지 않도록** 관리하세요.

---

## 🧪 간단한 체크리스트

- [ ] 의존성 설치 완료
- [ ] Firebase 설정 입력
- [ ] Expo 앱 실행 확인

---

## 📄 라이선스

MIT
