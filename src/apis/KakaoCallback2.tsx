// import styles from './KakaoOAuth2RedirectPage.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from './instance';

function KakaoOAuth2RedirectPage() {
  const navigate = useNavigate();
  // 1. 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  // 2. access Token 요청
  const getToken = async (code: string) => {
    const KAKAO_CLIENT_ID = 'ec8990372bab8090fbca892b0311f986';
    const REDIRECT_URI = 'http://localhost:5173/signin'; // 카카오 API 설정에 등록한 리다이렉트 URI
    const KAKAO_REST_API_KEY = KAKAO_CLIENT_ID;
    const KAKAO_REDIRECT_URI = REDIRECT_URI;

    try {
      const response = await api.post(
        'https://kauth.kakao.com/oauth/token',
        null, // 두 번째 인자로 data를 보내지 않음 (null 또는 아무 값도 넣지 않음)
        {
          params: {
            grant_type: 'authorization_code',
            client_id: KAKAO_REST_API_KEY,
            redirect_uri: KAKAO_REDIRECT_URI,
            code: code,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }

    // const response = await fetch(
    //   `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
    //   {
    //     method: 'POST',
    //     // headers: {
    //     //   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    //     // },
    //   }
    // );
    // return response.json();
  };

  //인가코드 받아서 백엔드에 넘김 -> 백엔드에서 엑세스토큰 , 리프레시토큰  받아옴 , 토큰을 스토리지에 저장
  //로그인 유무는 로컬스토리지에서 처리

  useEffect(() => {
    if (code) {
      getToken(code).then((res) => {
        console.log(res.access_token);

        navigate('/');
      });
    }
  }, []);

  return <div>로그인 처리 중...</div>;
}

export default KakaoOAuth2RedirectPage;
