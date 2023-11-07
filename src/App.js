import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './Pages/MainPage';
import MyPage from './Pages/MyPage';
import Navigate from './Components/Navigate';
import SideNav from './Components/SideNavigate';
import LivePage from './Pages/LivePage';
import PayPage from './Pages/PayPage';
import RankingPage from './Pages/RankingPage';
import Feedback from './Pages/Feedback';
import InfoPage from './Pages/InfoPage';
import SubScriptionPage from './Pages/SubscriptionPage';
import InfonavPage from './Pages/Infonavpage';

function App() {
  
  return (
    <div className='App'>
    <BrowserRouter>
    <Navigate/>
    <Routes>
      <Route path = "/" element={<MainPage/>}></Route>
    </Routes>
    <LayoutContainer>
      <SideNav/>
    <ContentContainer>
    <Routes>
      <Route path = "/live" element={<LivePage/>}></Route>
      <Route path = "/feedback" element={<Feedback />}></Route>
      <Route path = "/mypage" element={<MyPage />}></Route>
      <Route path = "/paypage" element={<PayPage />}></Route>
      <Route path = "/ranking" element={<RankingPage />}></Route>
      <Route path = "/infonav/*" element={<InfonavPage />}/>
      <Route path = "/info" element={<InfoPage />}></Route> 
      <Route path = "/subscript" element={<SubScriptionPage />}></Route>
    </Routes>
    </ContentContainer>
    </LayoutContainer>
    </BrowserRouter>
    </div>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;

export default App;