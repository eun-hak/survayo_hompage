import CallbackPage from '../components/KakaoCallback';
import KakaoOAuth2RedirectPage from '../apis/KakaoCallback2';

const Login = () => {
  return (
    <div>
      {/* <CallbackPage /> */}
      <KakaoOAuth2RedirectPage />
    </div>
  );
};

export default Login;
