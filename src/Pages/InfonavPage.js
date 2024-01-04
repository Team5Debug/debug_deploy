import React from 'react';
import styled from 'styled-components';
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import SubScriptionPage from './SubscriptionPage';
import InfoPage from './InfoPage';

const InfonavPage = () => {
    const location = useLocation();

    return ( 
        <Container>  
          <TopContainer>
            <NavStr>
              <UserInfo1 active={location.pathname === "/infonav/info"}><Link to ="/infonav/info" style={{color: 'gray', textDecoration: 'none'}}>내 정보</Link></UserInfo1>
              <Subscript active={location.pathname === "/infonav/subscript"}><Link to="/infonav/subscript" style={{color: 'gray', textDecoration: 'none'}}>결제 관리</Link></Subscript>
            </NavStr>
          </TopContainer>
            <Divider/>
            <Routes>
                <Route path="/info" element={<InfoPage/>}></Route>
                <Route path="/subscript" element={<SubScriptionPage/>}></Route>
            </Routes>
        </Container>

    )
}

const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`
const TopContainer = styled.div`
height: 115px;
width: 100%;
display: flex;
`

const Button = styled.button`
  position:relative;
  width:120px;
  height:50px;
  border:none;
  background-color:white;

&::after {
   content:"";
   position:absolute;
   bottom:-10px; // adjust as needed
   left:0;
   width:${props => props.active ? "100%" : "0"};
   height: 8px; // adjust as needed
   background-color:pink; 
   transition : width .3s ease-in-out ;
}
`;

const Mypage = styled(Button)``

const UserInfo1 = styled(Button)``

const Subscript = styled(Button)``

const NavStr = styled.div`
display: flex;
flex-direction: row;

font-size: 24px;
width: 100%;
margin-left: 2rem;
margin-top: 5rem;
`

const Divider = styled.div`
  position: relative;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  left: 2rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid lightgray;
  }

`;
    
export default InfonavPage;

