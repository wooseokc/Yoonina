import React, {useState, forwardRef} from "react";
import styled from "styled-components";
import useScrollCount from "../hook/useScrollCount";

const Career = forwardRef((props, ref) => {
  const [MajorPrice, setMP] = useState(0)
  const [TotalPrice, setTP] = useState(0)
  const [FadeStyle, setFade] = useState({opacity : 0})

  function countUP () {

    setFade({opacity: 1})
    const targetTP = 488805464;
    const targetMP = 385395714;

    const MPJump =  Math.floor(targetMP/150) 
    const TPJump =  Math.floor(targetTP/150)

    let count = 0;
    const intervalPrice = setInterval(() => {
      count += 1;
      setMP(p => p + MPJump)
      setTP(p => p + TPJump)

      if (count >= 150) {
        clearInterval(intervalPrice)
        setMP(targetMP)
        setTP(targetTP)
      }
    }, 10)
  }

  let Scrollref = useScrollCount(countUP, 0.1, true).refCount

  return (
    <CareerSection ref={ref}>
      <CareerText>Career</CareerText>
      <TourBox>
      <TourName>정규투어</TourName>
      <PrizeBox ref={Scrollref}>
        <PrizeIndex>상금 :</PrizeIndex>
        <PrizeValue>{MajorPrice.toLocaleString()}</PrizeValue>
      </PrizeBox>
      <TourCountBox>
        <CountIndex>대회 :</CountIndex>
        <WinValue style={FadeStyle}>{16}</WinValue>
      </TourCountBox>
      <WinBox>
        <WinIndex>우승 :</WinIndex>
        <WinValue style={{...FadeStyle, left : 15}}>{1}</WinValue>
      </WinBox>
      </TourBox>
      <TourBox>
      <TourName style={{left: 270}}>통산</TourName>
      <PrizeBox>
        <PrizeIndex>상금 :</PrizeIndex>
        <PrizeValue>{TotalPrice.toLocaleString()}</PrizeValue>
      </PrizeBox>
      <TourCountBox>
        <CountIndex>대회 :</CountIndex>
        <WinValue style={FadeStyle}>{33}</WinValue>
      </TourCountBox>
      <WinBox>
        <WinIndex>우승 :</WinIndex>
        <WinValue style={{...FadeStyle, left : 15}}>{4}</WinValue>
      </WinBox>
      </TourBox>
    </CareerSection>
  )
})

export default Career;

const CareerSection = styled.section`
  margin-top : 100px;
  height : 700px;
  background : #FFF;
  color : #810955;
  position : relative;
  font-family: 'Jua', sans-serif;
  overflow : hidden;
`

const CareerText =styled.div`
  position : absolute;
  font-size :40px;
  font-weight :900;
  left: 45%;
  top : -100px;
`

const TourBox = styled.div`
  border-radius: 40px;
  width: 600px;
  height: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top : 0px;

  @media (max-width: 450px) {
    width : 400px;
    transform: translateX(-75%);
  };

`

const TourName = styled.span`

  font-size : 30px;
  font-weight : 900;
  position: relative;
  left: 240px;
  top : 40px;

  @media (max-width: 450px) {
    left: 250px;
  };
`

const PrizeBox = styled.div`
  position: relative;
  top : 70px;
  left : 240px;
`
const TourCountBox = styled.div`
  position : relative;
  top : 80px;
  left : 120px;


`
const WinBox = styled.div`
  position : relative;
  top : 19px;
  left : 395px;
`

const PrizeIndex = styled.div`
  font-size : 25px;
  font-weight : 500; 
  position: relative;
  left : -55px

`
const PrizeValue = styled.div`
  font-size : 25px;
  font-weight : 500;
  position: relative;
  top : -31px;
  left : 40px;
`

const WinIndex = styled.div`
font-size : 22px;
font-weight : 500; 
position: relative;

left : -57px;
top : 1px;
`

const WinValue = styled.div`
  font-size : 22px;
  font-weight : 500;
  position : relative;
  left : 130px;
  top : -28px;

  transition: 2s ease;
`

const CountIndex =styled.div`
  font-size : 22px;
  font-weight : 500; 
  position: relative;
  left : 65px;
`

