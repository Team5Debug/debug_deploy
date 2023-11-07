import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import home from '../imgs/home_nav.svg';
import home_nav2 from '../imgs/home_nav2.svg';
import info from '../imgs/info_nav.svg';
import info_nav2 from '../imgs/info_nav2.svg';
import live from '../imgs/live_nav.svg';
import live_nav2 from '../imgs/live_nav2.svg';
import feedback from '../imgs/feedback_nav.svg';
import feedback_nav2 from '../imgs/feedback_nav2.svg';
import pay from '../imgs/pay_nav.svg';
import pay_nav2 from '../imgs/pay_nav2.svg';
import ranking_nav from '../imgs/ranking_nav.svg';
import ranking_nav2 from '../imgs/ranking_nav2.svg';
import broadCast from '../imgs/broadCast.svg';
import broadCast_nav2 from '../imgs/broadCast_nav2.svg';

//홈 라이브 피드백 랭킹 회원정보 결제안내
const SideNavigate = () => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  const userInfo = sessionStorage.getItem('userInfo');
  const BroadCastID = sessionStorage.getItem('BroadCastID');
  //hover 그림 변경 
  const [isListHoverHome, setIsListHoverHome] = useState(true);
  const [isListHover, setIsListHover] = useState(true);
  const [isListHover1, setIsListHover1] = useState(true);
  const [isListHover2, setIsListHover2] = useState(true);
  const [isListHoverRanking, setIsListHoverRanking] = useState(true);
  const [isListHoverInfo, setIsListHoverInfo] = useState(true);
  const [isListHoverChart, setIsListHoverChart] = useState(true);
  //버튼 클릭 
  const [isDivClickLive, setIsDivClickLive] = useState(false);
  const [isDivClickFeed, setIsDivClickFeed] = useState(false);
  const [isDivClickPay, setIsDivClickPay] = useState(false);
  const [isDivClickRanking, setIsDivClickRanking] = useState(false);
  const [isDivClickInfo, setIsDivClickInfo] = useState(false);
  const [isDivClickChart, setIsDivClickChart] = useState(false);

  useEffect(() => {
    const currentURL = window.location.href;
    const parsedUrl = new URL(currentURL);
    const pathSegments = parsedUrl.pathname.split('/'); // URL 경로를 '/'로 나눕니다.
    const liveSegment = pathSegments[pathSegments.length - 1]; // 마지막 세그먼트를 가져옵니다.
    console.log(pathSegments);
    setIsDivClickLive(false)
    setIsDivClickFeed(false)
    setIsDivClickRanking(false)
    setIsDivClickInfo(false)


    if (liveSegment === 'live') {
      setIsDivClickLive(true)
      setIsDivClickPay(false)
      setIsDivClickChart(false)

    }
    else if (liveSegment === 'feedback') {
      setIsDivClickFeed(true)
      setIsDivClickPay(false)
      setIsDivClickChart(false)

    }
    else if (liveSegment === 'ranking') {
      setIsDivClickRanking(true)
      setIsDivClickPay(false)
      setIsDivClickChart(false)

    }

    else if (liveSegment === 'info') {
      setIsDivClickInfo(true)
      setIsDivClickPay(false)
      setIsDivClickChart(false)

    }
    else if (liveSegment === 'mypage') {
      setIsDivClickChart(true)
      setIsDivClickPay(false)
    }
    else if(liveSegment === 'subscript'){
      setIsDivClickInfo(true)
      setIsDivClickPay(false)
      setIsDivClickChart(false)
    }

  })

  const HomeButton = () => {  // 버튼 클릭시 홈페이지 이동
    if (userInfo) {  // userInfo가 존재하는지 확인
    }
    navigate("/");
    setIsListHoverHome(!isListHoverHome);
    setIsDivClickLive(false);
    setIsDivClickFeed(false);
    setIsDivClickPay(false);
    setIsDivClickRanking(false);
    setIsDivClickInfo(false);
    setIsDivClickChart(false);
  }

  const RankingButton = () => {  // 버튼 클릭시 순위페이지 이동
    navigate("/ranking");
    setIsDivClickRanking(!isDivClickRanking);
    setIsDivClickLive(false);
    setIsDivClickFeed(false);
    setIsDivClickPay(false);
    setIsDivClickInfo(false);
    setIsDivClickChart(false);

  }

  const UserInfoButton = () => {  // 버튼 클릭시 내정보페이지 이동
    if (userInfo) {  // userInfo가 존재하는지 확인
      navigate("/infonav/info");
      setIsDivClickInfo(!isDivClickInfo);
      setIsDivClickLive(false);
      setIsDivClickFeed(false);
      setIsDivClickPay(false);
      setIsDivClickChart(false);
      setIsDivClickRanking(false);

    } else {
      alert("로그인이 필요합니다.");
    }
  }

  const LiveButton = () => {  // 버튼 클릭시 실시간페이지 이동

    if (userInfo) {  // userInfo가 존재하는지 확인
      if (BroadCastID) {
        navigate("/live");
        setIsDivClickLive(!isDivClickLive);
        setIsDivClickFeed(false);
        setIsDivClickPay(false);
        setIsDivClickRanking(false);
        setIsDivClickChart(false);
        setIsDivClickInfo(false);


      } else {
        alert("방송 정보가 없습니다.\nURL 입력창에 방송 주소를 입력해주세요,");
      }
    } else {
      alert("로그인이 필요합니다.");
    }
  }
  const ChartButton = () => {  // 버튼 클릭시 피드백 페이지로 이동

    if (userInfo) {  // userInfo가 존재하는지 확인
      navigate("/mypage");
      setIsDivClickChart(!isDivClickChart);
      setIsDivClickLive(false);
      setIsDivClickPay(false);
      setIsDivClickRanking(false);
      setIsDivClickInfo(false);
      setIsDivClickFeed(false);

    } else {
      alert("로그인이 필요합니다.");
    }
  }

  const FeedbackButton = () => {  // 버튼 클릭시 피드백 페이지로 이동

    if (userInfo) {  // userInfo가 존재하는지 확인
      navigate("/feedback");
      setIsDivClickFeed(!isDivClickFeed);
      setIsDivClickLive(false);
      setIsDivClickPay(false);
      setIsDivClickRanking(false);
      setIsDivClickInfo(false);
      setIsDivClickChart(false);

    } else {
      alert("로그인이 필요합니다.");
    }
  }

  const PayButton = () => {  // 버튼 클릭시 결제안내 페이지로 이동
    navigate("/paypage");
    setIsDivClickPay(!isDivClickPay); // Pay 버튼을 클릭하면 해당 버튼을 활성화
    setIsDivClickFeed(false);
    setIsDivClickLive(false);
    setIsDivClickRanking(false);
    setIsDivClickChart(false);
    setIsDivClickInfo(false); // 회원정보 버튼을 비활성화

    console.log('클릭');
  }

  return (

    <SideNav>
      {location !== "/" ?
        <Navbar style={{ position: "fixed", display: "flex", flexDirection: "column", backgroundColor: "white", left: "1rem" }} >
          <div
            
          >
            <Home
            onMouseOver={() => setIsListHoverHome(false)}
            onMouseOut={() => setIsListHoverHome(true)}
              onClick={HomeButton}
              style={{
                fontWeight: 800,
                backgroundColor: isListHoverHome ? '' : '#FFF2F4',
                color: (isListHoverHome ? 'black' : '#F74E7B'),
                borderRadius: '8px'
              }}
            >
              <img src={isListHoverHome ? home : home_nav2} />
              <h6>홈</h6>
            </Home>
          </div>
          <div style={{ width: '20px', height: '10px' }}></div>
          <div
            onMouseOver={() => setIsListHover(false)}
            onMouseOut={() => setIsListHover(true)}
          >
            <Live
              onClick={LiveButton}
              style={{
                fontWeight: isDivClickLive ? 800 : 'normal',
                backgroundColor: isDivClickLive ? '#FFF2F4' : isListHover ? '' : '#FFF2F4',
                color: isDivClickLive ? '#F74E7B' : (isListHover ? 'black' : '#F74E7B'),
                borderRadius: isDivClickLive ? '8px' : '8px'
              }}
            ><img src={isDivClickLive ? live_nav2 : (isListHover ? live : live_nav2)} /><h6>라이브</h6></Live>
          </div>
          <div style={{ height: '10px' }}></div>
          <div
            onMouseOver={() => setIsListHover1(false)}
            onMouseOut={() => {
              setIsListHover1(true);
            }}
          // 스타일 추가
          // style={{ backgroundColor: isDivClickFeed ? '#FFF2F4' : 'white' ,borderRadius: '8px' }}
          >
            <Feed
              onClick={FeedbackButton}
              style={{
                fontWeight: isDivClickFeed ? 800 : 'normal',
                backgroundColor: isDivClickFeed ? '#FFF2F4' : isListHover1 ? '' : '#FFF2F4',
                color: isDivClickFeed ? '#F74E7B' : (isListHover1 ? 'black' : '#F74E7B'),
                borderRadius: isDivClickFeed ? '8px' : '8px'
              }}
            >
              <img src={isDivClickFeed ? feedback_nav2 : (isListHover1 ? feedback : feedback_nav2)} />
              <h6>피드백</h6>
            </Feed>
          </div>
          <div style={{ width: '20px', height: '10px' }}></div>

          <div
            onMouseOver={() => setIsListHoverChart(false)}
            onMouseOut={() => setIsListHoverChart(true)}
          >
            <Chart
              onClick={ChartButton}
              style={{
                fontWeight: isDivClickChart ? 800 : 'normal',
                backgroundColor: isDivClickChart ? '#FFF2F4' : isListHoverChart ? '' : '#FFF2F4',
                color: isDivClickChart ? '#F74E7B' : (isListHoverChart ? 'black' : '#F74E7B'),
                borderRadius: '8px'
              }}
            >
              <img src={isDivClickChart ? broadCast_nav2 : (isListHoverChart ? broadCast : broadCast_nav2)} />
              <h6>방송 분석 차트</h6>
            </Chart>
          </div>
          <div style={{ width: '20px', height: '10px' }}></div>
          <div
            onMouseOver={() => setIsListHoverRanking(false)}
            onMouseOut={() => setIsListHoverRanking(true)}
          >
            <Ranking
              onClick={RankingButton}
              style={{
                fontWeight: isDivClickRanking ? 800 : 'normal',
                backgroundColor: isDivClickRanking ? '#FFF2F4' : isListHoverRanking ? '' : '#FFF2F4',
                color: isDivClickRanking ? '#F74E7B' : (isListHoverRanking ? 'black' : '#F74E7B'),
                borderRadius: '8px'
              }}
            >
              <img src={isDivClickRanking ? ranking_nav2 : (isListHoverRanking ? ranking_nav : ranking_nav2)} />
              <h6>랭킹</h6>
            </Ranking>
          </div>
          <div style={{ width: '20px', height: '10px' }}></div>
          <div
            onMouseOver={() => setIsListHoverInfo(false)}
            onMouseOut={() => setIsListHoverInfo(true)}
          >
            <UserInfo
              onClick={UserInfoButton}
              style={{
                fontWeight: isDivClickInfo ? 800 : 'normal',
                backgroundColor: isDivClickInfo ? '#FFF2F4' : isListHoverInfo ? '' : '#FFF2F4',
                color: isDivClickInfo ? '#F74E7B' : (isListHoverInfo ? 'black' : '#F74E7B'),
                borderRadius: '8px'
              }}
            >
              <img src={isDivClickInfo ? info_nav2 : (isListHoverInfo ? info : info_nav2)} />
              <h6>회원정보</h6>
            </UserInfo>
          </div>
          <div style={{ width: '20px', height: '10px' }}></div>
          <div
            onMouseOver={() => setIsListHover2(false)}
            onMouseOut={() => setIsListHover2(true)}
          >
            <Pay
              onClick={PayButton}
              style={{
                fontWeight: isDivClickPay ? 800 : 'normal',
                backgroundColor: isDivClickPay ? '#FFF2F4' : isListHover2 ? '' : '#FFF2F4',
                color: isDivClickPay ? '#F74E7B' : (isListHover2 ? 'black' : '#F74E7B'),
                borderRadius: isDivClickPay ? '8px' : '8px'
              }}

            ><img src={isDivClickPay ? pay_nav2 : (isListHover2 ? pay : pay_nav2)} /><h6>요금안내</h6>
            </Pay>
          </div>
          <div style={{ width: '20px', height: '10px' }}></div>

        </Navbar>
        : <></>}
    </SideNav>
  )
}

const SideNav = styled.div`
width: 230px;
height: 100vh;
// border: 1px solid #ccc;
`

const Home = styled.button`
  margin-top:30px;
  padding-top:10px;
  width: 200px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  &:hover{  
    background-color:#FFF2F4;
    border-radius: 8px;
  }
  img {
    width: 20px;
    height: 20px;
  }

  h6 {
    margin-left: 15px;
  }

  &:hover {
    font-weight: 800;
  }
`

const Ranking = styled.button`
  padding-top:10px;
  width: 200px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
  }

  h6 {
    margin-left: 15px;
  }

  &:hover {
    font-weight: 800;
    background-color : #FFF2F4;
    color : #F74E7B;
    border-radius:8px;
  }
`

const UserInfo = styled.button`
  padding-top:10px;
  width: 200px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
  }

  h6 {
    margin-left: 15px;
  }

  &:hover {
    font-weight: 800;
    background-color : #FFF2F4;
    color : #F74E7B;
    border-radius:8px;
  }
`

const Live = styled.button`
  padding-top: 10px;
  width: 200px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
  }

  h6 {
    margin-left: 15px;
  }

  &:hover {
    font-weight: 800;
    background-color : #FFF2F4;
    color : #F74E7B;
    border-radius:8px;
    
    
  }
`

const Feed = styled.button`
  padding-top: 10px;
  width: 200px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
  }

  h6 {
    margin-left: 15px;
  }

  &:hover {
    font-weight: 800;
    background-color : #FFF2F4;
    color : #F74E7B;
    border-radius:8px;
  }
`

const Pay = styled.button`
padding-top: 10px;
  width: 200px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  
  img {
    width: 20px;
    height: 20px;
  }

  h6 {
    margin-left: 15px;
  }

   &:hover {
    font-weight: 800;
    background-color : #FFF2F4;
    color : #F74E7B;
    border-radius:8px;
    
    
  }
`

const Chart = styled.button`
  padding-top:10px;
  width: 200px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
  }

  h6 {
    margin-left: 15px;
  }

  &:hover {
    font-weight: 800;
    background-color : #FFF2F4;
    color : #F74E7B;
    border-radius:8px;
  }
`

export default SideNavigate;