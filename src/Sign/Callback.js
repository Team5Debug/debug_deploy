import React, { useEffect } from 'react';
import axios from 'axios';

const Callback = () => {
    console.log("여기1");
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log("여기2" + code);

        if (code) {
            const serverIP = process.env.REACT_APP_GITHUB_IP;
            const port = process.env.REACT_APP_PORT;
            // 서버에 인증 코드를 보내 액세스 토큰 교환
            axios.post(`http://${serverIP}:${port}/auth/google`, { code })
                .then(response => {
                    console.log("여기3" + response);
                    axios.get(`http://${serverIP}:${port}/find`,{    // 액세스 토큰을 받아오는 HTTP 요청을 보냅니다.
                    params:{
                        id_token: String(response),
                        access_token: String(response),
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
                })
                .catch(error => {
                    // 에러 처리
                });
        }
    }, []);

    return <div>Loading...</div>;
};

export default Callback;
