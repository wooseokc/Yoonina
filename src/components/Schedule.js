import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Upcoming} from '../svg/next.svg';

const Schedule = forwardRef((props, ref) => {
  const [tour, setTour] = useState('ongoing')

  
  const next = {
    title : '제주삼다수 마스터스',
    data : '2022.08.04~2022.08.07',
    img : '	https://klpga.co.kr/DATA/image/mainBanner/default_2022080001_190_105.png'
  }
  const last = {
    title : '에버콜라겐 퀸즈크라운 2022',
    data : '2022.07.14~2022.07.17',
    img : '	https://klpga.co.kr/DATA/image/mainBanner/default_2022070003_140_80.png'
  }
  const current = {
    title : '호반 서울신문 위민스 클래식',
    data : '2022.07.22~2022.07.24',
    img : 'https://klpga.co.kr/DATA/image/mainBanner/default_2022070021_140_80.png'
  }
  
  function ChangeButton (e) {
    if (tour === 'ongoing') {
      setTour ('upcoming')
    } else {
      setTour('ongoing')
    }
  } 
  function ChangeButton2 (e) {
    if (tour === 'upcoming') {
      setTour ('last')
    } else {
      setTour('upcoming')
    }
  } 



  return (
    <ScheduleSection ref={ref}>
      <ScheduleText></ScheduleText>
      {current.title && 
        <>
          <CurrentBox style={tour === 'ongoing' ? {left : '50%'} : {left : '2000px'}}>
            <NButton onClick={ChangeButton}> 
              <Upcoming style={{ fill: '#810955', pointerEvents: 'none' }}/>
            </NButton>
            ongoing
            <Img src={current.img}></Img>
            <TourName>{current.title}</TourName>
            <TourDate>{current.data}</TourDate>
          </CurrentBox>
          
        <NextBox style={tour === 'upcoming' ? {left : '50%'} : {left : '-2000px'}}>
          <PrevButton onClick={ChangeButton}>
            <Upcoming style={{ fill: '#810955', pointerEvents: 'none',   transform: 'rotate(180deg)' }}/>
          </PrevButton>
          Upcoming
          <Img src={next.img}></Img>
          <TourName>{next.title}</TourName>
          <TourDate>{next.data}</TourDate>
        </NextBox>
        </>
        }
      {!current.title &&
      <>
        <LastBox style={tour === 'last' ? { left: '50%' } : { left: '-2000px' }}>
          <NButton onClick={ChangeButton2}>
            <Upcoming style={{ fill: '#810955', pointerEvents: 'none' }} />
          </NButton>
          last
          <Img src={last.img}></Img>
          <TourName>{last.title}</TourName>
          <TourDate>{last.data}</TourDate>
        </LastBox>
        <NextBox style={tour === 'upcoming' ? { left: '50%' } : { left: '2000px' }}>
          <PrevButton onClick={ChangeButton2}>
            <Upcoming style={{ fill: '#810955', pointerEvents: 'none', transform: 'rotate(180deg)' }} />
          </PrevButton>
          Upcoming
          <Img src={next.img}></Img>
          <TourName>{next.title}</TourName>
          <TourDate>{next.data}</TourDate>
        </NextBox>
      </>
      }
    </ScheduleSection>
  )
});

export default Schedule;


const ScheduleSection = styled.section`
  margin-top : 30px;
  height : 450px;
  width : 100%;
  background : #FFF;
  color : #810955;
  position : relative;
  font-family: 'Jua', sans-serif;
  display: flex;
  justify-content: center;

  overflow :hidden;
`


const ScheduleText =styled.div`
  font-size :40px;
  font-weight :900;
  left: 45%;
`

const CurrentBox = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  left: 50%;
  transform: translateX(-50%);
  top : 0px;
  display: flex;
  justify-content: center;
  font-size :60px;
  font-weight :400;

  transition: all 1s ease;
`
const LastBox = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  left: 50%;
  transform: translateX(-50%);
  top : 0px;
  display: flex;
  justify-content: center;
  font-size :60px;
  font-weight :400;

  transition: all 1s ease;
`

const Img = styled.img`
  width: 300px;
  height: 120px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top : 100px;
`

const TourName = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size :18px;
  font-weight :300;
  top : 230px;
  color : #2E0249;
`

const TourDate = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size :15px;
  font-weight :300;
  top : 280px;
  color : #2E0249;
`
const NButton = styled.button`
background: inherit ; 
border:none; 
box-shadow:none; 
border-radius:0; 
padding:0; 
overflow:visible; 
cursor:pointer;

width :30px;
height : 30px;

position : absolute;
left : 80%;
top : 28px;
@media (max-width: 450px) {
  left : 65%;
};
`

const NextBox = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  left: 50%;
  transform: translateX(-50%);
  top : 0px;
  display: flex;
  justify-content: center;
  font-size :60px;
  font-weight :400;

  transition: all 1s ease;
`

const PrevButton = styled.button`
  background: inherit ; 
  border:none; 
  box-shadow:none; 
  border-radius:0; 
  padding:0; 
  overflow:visible; 
  cursor:pointer;

  width :30px;
  height : 30px;

  position : absolute;
  left : 10%;
  top : 28px;
`