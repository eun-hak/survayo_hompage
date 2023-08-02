// 카카오 로그인 콜백 페이지 컴포넌트 (CallbackPage.js)
import React, { useEffect } from 'react';
import axios from 'axios';

const CallbackPage = () => {
  const KAKAO_CLIENT_ID = 'ec8990372bab8090fbca892b0311f986';
  const REDIRECT_URI = 'http://localhost:5173/signin'; // 카카오 API 설정에 등록한 리다이렉트 URI

  useEffect(() => {
    // 콜백 페이지에서 URL 파라미터로 전달된 인증 코드 추출
    const urlSearchParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlSearchParams.get('code');

    // 인증 코드로 액세스 토큰 요청
    axios
      .post('https://kauth.kakao.com/signin', {
        grant_type: 'authorization_code',
        client_id: KAKAO_CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        code: authorizationCode,
      })
      .then((response) => {
        const accessToken = response.data.access_token;
        // TODO: 얻은 액세스 토큰을 사용하여 사용자 정보를 가져오는 요청 등을 수행할 수 있습니다.
        console.log('Access Token:', accessToken);
      })
      .catch((error) => {
        console.error('Error getting access token:', error);
      });
  }, []);

  return <div>로그인 처리 중...</div>;
};

export default CallbackPage;
