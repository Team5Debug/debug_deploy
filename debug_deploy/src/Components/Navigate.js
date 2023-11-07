import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Navbar, Nav, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // 외부 css에서 네비바 가져옴
import Login from '../Sign/Login';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import YouTube_Login from '../Sign/Youtube_Login';
import Logo from '../imgs/logo2.svg';
import Url from './Url';

const Navigate = () => {
  const [modal, setModal] = useState(false);
  const [size, setSize] = useState("12");
  const navigate = useNavigate();
  const location = window.location.pathname;
  const userInfo = sessionStorage.getItem('userInfo');

  const openModal = (event) => {  // 모달창 활성화
    setModal(true);
  }
  const closeModal = () => {  // 모달창 비활성화
    setModal(false);
  }
  const MainButton = () => {  // 로고 클릭시 메인페이지 이동
    navigate("/");
  }

  const MyPageButton = () => {  // 로고 클릭시 메인페이지 이동
    if(userInfo) {  // userInfo가 존재하는지 확인
      navigate("infonav/info");
    } else {
      alert("로그인이 필요합니다.");
    }
  }

  const ChartButton = () => {  // 로고 클릭시 메인페이지 이동
    if(userInfo) {  // userInfo가 존재하는지 확인
      navigate("/mypage");
    } else {
      alert("로그인이 필요합니다.");
    }
  }

  const FeedbackButton = () => {  // 로고 클릭시 메인페이지 이동
    if(userInfo) {  // userInfo가 존재하는지 확인
      navigate("/feedback");
    } else {
      alert("로그인이 필요합니다.");
    }
  }

  const PayButton = () => { // 결제 버튼 클릭시 PayPage 이동
    navigate("/paypage");
  }

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const updateRightSize = () => {
    if(userInfo) {
      setSize("17");
    } else {
      setSize("10");
    }
  }

  useEffect(() => {
    updateRightSize();
  }, []);

    return (
        <TopNav>
            <Navbar style={{position: "fixed", backgroundColor : "white", boxShadow : "1.5px 1.5px 1.5px 1.5px #F3F4F6", width: "100vw", height: "7.6vh", zIndex: "1000"}} >
                <Navbar.Brand>
                  <Nav_Str>
                  <UserImg onClick={MainButton}>  
                    <img className="RogoImage" alt="Live_Logo" src={Logo} />
                  </UserImg>
                  {location !== "/" ?
                    <PageNav>
                      <Url/>
                    </PageNav>
                    : 
                    <PageNav style={{marginRight: `${size}rem`}}>
                      <Info onClick={MyPageButton}>마이페이지
                        <img className="CheckIcon" alt="CheckIcon" src={"img/CheckIcon.png"} />
                      </Info>
                      <Chart onClick={ChartButton}>방송차트
                        <img className="CheckIcon" alt="CheckIcon" src={"img/CheckIcon.png"} />
                      </Chart>
                      <Feed onClick={FeedbackButton}>피드백
                        <img className="CheckIcon" alt="CheckIcon" src={"img/CheckIcon.png"} />
                      </Feed>
                    </PageNav>}
                    <Nav className="mr-auto">
                    {sessionStorage.getItem('userInfo') ? (
                      <div style={{display: "flex", lignItems: "center", justifyContent: "center"}}>
                        <DropdownMenu/>
                      </div>
                    ) : (
                        <Form>
                            <Pay_button onClick={PayButton}>요금안내</Pay_button>
                            <ModalButton type="button" onClick={openModal}>로그인</ModalButton>
                        </Form>
                    )}
                  </Nav>
                  </Nav_Str>
                </Navbar.Brand>
                {modal? (
                <div>
                    <Nav_modal onClick={closeModal}>
                        <Nav_modalin onClick={stopPropagation}>
                        <img className="RogoImage" alt="Live_Logo" src={Logo} />
                        <h4>나의 방송 파트너는 Google or YouTube 계정으로<br/> 로그인이 가능합니다.</h4>
                        <Login />
                        <YouTube_Login />
                        <XButton onClick={closeModal}>X</XButton>
                        <h5>계정이 없으신가요? <a href={"https://accounts.google.com/signup/v2/createaccount?biz=false&cc=KR&continue=https%3A%2F%2Fwww.google.com%3Fhl%3Dko&dsh=S671864125%3A1696318661268810&flowEntry=SignUp&flowName=GlifWebSignIn&hl=ko&theme=glif"}>회원가입</a></h5>
                        </Nav_modalin>
                    </Nav_modal>
                </div>
            ):null}
            </Navbar>
          </TopNav>
    );
}

const Nav_Str = styled.div`
  display: flex;
  flexDirection: row;
  width: 100vw;
  justifyContent: space-between;
  align-items: center;
`

const PageNav = styled.div`
  display: flex;
  flex: 8;
  align-items: center;
  justify-content: center;
  margin-right: 15rem;
  margin-left: 3rem;
`

const Info = styled.button`
  margin-right: 3rem;
  border: none;
  background-color: white;
  font-weight: 600;
  
  img {
    margin-bottom: 0.5rem;
  }
`

const Chart = styled.button`
  border: none;
  background-color: white;
  font-weight: 600;

  img {
    margin-bottom: 0.5rem;
  }
`

const Feed = styled.button`
  margin-left: 3rem;
  border: none;
  background-color: white;
  font-weight: 600;

  img {
    margin-bottom: 0.5rem;
  }
`

const Pay_button = styled.button`
  width: 85px;
  position: relative;
  right: 4rem;
  background-color: pink;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 4px 15px;
  font-size: 1rem;

  // &:hover {
  //   background-color: hotpink;
  // }
`

const TopNav = styled.div`
  height: 7.6vh;
`

const ModalButton = styled.button`
  padding: 3px 13px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1.7px solid black;
  border-radius: 20px;
  position: relative;
  right: 3rem;
  background-color: white;
  font-weight: 600;
  // &:hover {
  //   background-color: hotpink;
  // }
`;

const XButton = styled.button`
  border: none;
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  font-size: 25px;
  font-weight: 300;

  background: ${(props) => props.background || 'white'};
`

const UserImg = styled.button`
  background: none;
  border: none;
  position: relative;
  left: 2rem;
`


const Nav_modalin = styled.div`
  width: 400px;
  height: 420px;
  background-color: white;
  padding: 20px; // 내부 패딩 추가
  border-radius: 8px; // 둥근 모서리
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); // 그림자 효과 추가
  background: #FFFFFF 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    position: relative;
    top: 3rem;
  }

  h4 {
    position: relative;
    top: 5rem;
    font-size: 15px;
  }

  h5 {
    position: relative;
    font-size: 13px;
    top: 8rem;
    left: 4.8rem;
    color: #747474;
  }
`

const Nav_modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); // 어두운 반투명 배경
  position: fixed;
  top: 0; // 화면 상단부터 시작
  left: 0; // 화면 왼쪽부터 시작
  z-index: 999; // 다른 요소들 위에 나타나도록 z-index 설정
`

const UserName = styled.div`
  color: black;
  position: absolute;
  right: 2.5rem;
  top: 26px;
`;

export default Navigate;