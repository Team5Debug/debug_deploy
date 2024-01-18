import React from 'react';
import { gapi } from 'gapi-script';
import axios from 'axios';
import styled from 'styled-components';

// // 설치한 패키지 불러오기
// const multerS3 = require('multer-s3');
// const AWS = require('aws-sdk');

// // region - AWS에서 EC2 작업 시 설정한 지역
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'us-east-2',
// });

// const client_id = process.env[REACT_APP_CLIENT_KEY];
const client_id = import.meta.env.REACT_APP_CLIENT_KEY;
const REDIRECT_URI = 'http://localhost:3000/callback';
console.log("client_id 1: " + client_id);
console.log("node:",process.env.NODE_ENV)
const authenticate = async () => {  // 사용자 인증 후 YouTube API에 접근할 수 있는 권한 부여
    try {
      const options = {
        prompt: 'select_account' // 계정 강제 선택
      };
      await gapi.client.init({
        client_id: client_id+'.apps.googleusercontent.com'
      });
      const auth2 = gapi.auth2.getAuthInstance();
      if (auth2 != null) {
        await auth2.signIn(options);
  
        const user = gapi.auth2.getAuthInstance().currentUser.get();  // 유저 정보
        const serverIP = process.env.REACT_APP_GITHUB_IP;
        const port = process.env.REACT_APP_PORT;
        axios.get(`http://${serverIP}:${port}/find`,{    // 액세스 토큰을 받아오는 HTTP 요청을 보냅니다.
          params:{
            id_token: String(user.xc.id_token),
            access_token: String(user.xc.access_token),
          }
        }).then((res)=>{
          if((res.status == "200")){
            sessionStorage.setItem('userInfo', JSON.stringify(res.data));  // 세션 저장
            setTimeout(() => {
              window.location.replace("/");
            }, 500); 
          } else {
            alert("서버와 접속이 실패하셨습니다.");
            window.location.replace("/");
          }
        })
        .catch((Error)=>{
          alert("서버와 접속이 실패하셨습니다.");
          window.location.replace("/");
        })
      } else {
        console.error('gapi.auth2 인스턴스를 가져오는 데 실패했습니다.');
      }
      
    } catch (error) {
      console.error('로그인에 실패했습니다.', error);
    }
  };

const Login = () => {
  const handleLogin = () => {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const options = {
        redirect_uri: REDIRECT_URI,
        client_id: client_id,
        access_type: 'offline',
        response_type: 'code',
        scope: 'https://www.googleapis.com/auth/youtube.readonly',
        state: 'state_parameter_passthrough_value',
        include_granted_scopes: true
        // 필요한 추가 스코프를 여기에 추가
    };

    const qs = new URLSearchParams(options);
    window.location = `${rootUrl}?${qs.toString()}`;
};
    return (
      <GoogleLogin onClick={handleLogin}>
        <Login_str>
          <img src="img/GoogleLogo.png" alt="Google Logo" style={{width: "45px", top: "-1px"}}/>
          Continue with Google
        </Login_str>
      </GoogleLogin>
    );
}

const GoogleLogin = styled.button`
  position: relative;
  width: 300px;
  height: 50px;
  background-color: white;
  padding: 4px;
  border: 0.5px solid #747474;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  top: 6.5rem;
`

const Login_str = styled.div`
  margin-top: -1px;
  margin-right: 1rem;
`

export default Login;