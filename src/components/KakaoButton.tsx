// 카카오 로그인 버튼 컴포넌트 (KakaoLoginButton.js)
import React from 'react';
import axios from 'axios';

const KakaoLoginButton = () => {
  const KAKAO_CLIENT_ID = 'ec8990372bab8090fbca892b0311f986';
  const REDIRECT_URI = 'http://localhost:5173/signin'; // 카카오 API 설정에 등록한 리다이렉트 URI

  const handleKakaoLogin = () => {
    // 카카오 로그인 요청
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  };

  return <button onClick={handleKakaoLogin}>카카오로 로그인</button>;
};

export default KakaoLoginButton;
