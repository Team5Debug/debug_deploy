import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const RankingPage = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
        const serverIP = process.env.REACT_APP_GITHUB_IP;
        //` 이거 사용
        axios.get(`http://${serverIP}:8801/po`,{
        })
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((Error) => {console.log(Error)});
    },[]);


return (
    <RankingBox>
        <div style={{width: "1200px", height: "780px"}}>
        <ChannelBox>
            <h3><img src="img/Ranking_img.png"></img>인기 급상승 10위</h3>
            <Divider style={{top: "0rem"}}/>
            {data.data && data.data.map((item, index) => {
                const truncatedTitle = item.title.length > 45 ? item.title.substring(0, 45) + "..." : item.title

                if(index == 5) {
                    return (
                        <>
                        <Divider style={{top: "1rem"}}/>
                        <Channel key={index}>
                            <h5>{index + 1}위</h5>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <img src={item.thumbnails_Url}/>
                                <h6>{truncatedTitle}</h6>
                                <p>조회수: {item.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </a>
                        </Channel>
                        </>
                    );
                } else {
                    return (
                        <Channel key={index}>
                            <h5>{index + 1}위</h5>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <img src={item.thumbnails_Url}/>
                                <h6>{truncatedTitle}</h6>
                                <p>조회수: {item.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                            </a>
                        </Channel>
                    )
                }
                
            })}
        </ChannelBox> 
        </div>
    </RankingBox>
    
)
}

const RankingBox =styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const ChannelBox = styled.div`
    width: 1200px;
    height: auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;  // 채널들 사이에 동일한 간격을 만듭니다.

    h3 {
        position: relative;
        top: 1.7rem;
        font-size: 20px;
        
        img {
            width: 35px;
            height: 35px;
            margin-top: -3px;
        }
    }
`
const Channel = styled.div`
    width: 219px;
    height: 250px;

    img {
        width: 220px;
        height: 123px;
    }

    h5 {
        font-size: 18px;
        float: left;
    }

    h6 {
        height: 40px;
        font-size: 14px;
        font-weight: 700;
        margin-top: 10px;
        display: flex;
        align-items: flex-start;
    }

    a {
        text-decoration: none;
        color: black;
    }

    p {
        font-size: 12px;
        display: flex;
        align-items: flex-start;
        font-weight: 600;
        color: gray;
    }
`

const Divider = styled.div`
  position: relative;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5vh;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid gray;
  }

`;

export default RankingPage;