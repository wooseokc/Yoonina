import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import HiteProfile from "../images/hite_profile_crop-removebg.png"
import Pinkfront from "../images/pink_front_crop-removebg.png"
import WithBall from "../images/withball_crop-removebg.png"

import EverColloagen from '../images/evercolla.png';

import { ReactComponent as Pause} from '../svg/pause.svg';
import { ReactComponent as Right} from '../svg/right.svg';



export default function ImageSlide () {
  const photoArr = [HiteProfile, Pinkfront, WithBall];
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(5000);
  const [fade, setFade] = useState(true);

  function useInterval(callback, delay) {
    const savedCallback = useRef(); 
  
    useEffect(() => {
      savedCallback.current = callback; 
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();

      }
      if (delay !== null) { 
        let id = setInterval(tick, delay);
        return () => {
          clearInterval(id); 
        } 
      }
    }, [delay]); 
  }

  function photoMove () {
    setIndex(index => (index + 1) % 3)
  }


  useInterval(photoMove, delay)

  function pause (e) {
    if (delay === null) {
      setDelay(5000)
      setFade(true)
    } else {
      setDelay(null)
      setFade(false)
      e.target.childNodes[0].style.fill = '#810955'
    }
  }

  function bigger (e) {
    e.target.childNodes[0].style.fill = '#810955'
  }
  function smaller (e) {
    e.target.childNodes[0].style.fill = '#CA4E79'
  }

  function nextPic (e) {
    setIndex(index => (index + 1) % 3) 
  }
  return(
    <>
      <WinnerBox fade={fade}>
        <WinnerImg src={EverColloagen}></WinnerImg>
        <WinnerText>2022 Champion</WinnerText>
      </WinnerBox>

      <Imgages src={photoArr[0]} style={index === 0 ? {display : 'inline-block'} : {display : 'none'}} fade={fade}></Imgages>
      <Imgages src={photoArr[1]} style={index === 1 ? {display : 'inline-block'} : {display : 'none'}} fade={fade}></Imgages>
      <Imgages src={photoArr[2]} style={index === 2 ? {display : 'inline-block'} : {display : 'none'}} fade={fade}></Imgages>

      <PauseBox onFocus={bigger} onBlur={(delay !== null ? smaller : null)} onMouseOver={bigger} onMouseOut={(delay !== null ? smaller : null)} onClick={pause}>
          <Pause style={{width : 30, height: 30, fill: '#CA4E79', pointerEvents:'none'}}/>
      </PauseBox>
      <RightBox onFocus={bigger} onBlur={smaller} onMouseOver={bigger} onMouseOut={smaller} onClick={nextPic}>
          <Right style={{width : 25, height: 25, fill: '#CA4E79', pointerEvents:'none'}}/>
      </RightBox>
    </>
  )
}

const Imgages = styled.img`
  position : absolute;
  height : 800px;
  width : 800px;
  bottom: 0;
  left : 50%;
  transform: translateX(-50%);

  

  animation: ${props => props.fade ? 'fadeIn 5s ease 0s infinite' : 'none'};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    50% {
      opacity : 1;
    }

    100% {
      opacity: 0;
    }
  }

  @media (max-width: 500px) {
    height : 700px;
    width : 400px;

  }
`

const PauseBox = styled.button`
  background: none ; 
  border:none; 
  box-shadow:none; 
  border-radius:0; 
  padding:0; 
  overflow:visible; 
  cursor:pointer;
  
  position: absolute;
  width : 30px;
  height: 30px;
  bottom: 9px;
  right: 45px;
  z-index : 90;
`


const RightBox = styled.button`
  background: none ; 
  border:none; 
  box-shadow:none; 
  border-radius:0; 
  padding:0; 
  overflow:visible; 
  cursor:pointer;

  position: absolute;
  width : 23px;
  height: 23px;
  bottom: 13px;
  right: 20px
`


const WinnerBox = styled.div`

  animation: ${props => props.fade ? 'fadeInAni 5s ease 0s infinite' : 'none'};

  @keyframes fadeInAni {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }

    60% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  z-index : 20;

  position : absolute;
  top : 400px;
  left : 50%;
  transform: translateX(-50%);
  pointerEvents:'none'


`

const WinnerImg = styled.img`
  width : 900px;
  position : relative;
  top : 30px;
  z-index : 99;

  @media (max-width: 500px) {
    width : 300px;
    top : -320px;
  }


`

const WinnerText = styled.div`
  font-size : 90px;
  font-weight : 900;
  color :#aa3355;
  z-index : 99;
  position : relative;
  top : -70px;
  left : 50%;
  transform: translateX(-40%);

  @media (max-width: 500px) {
    font-size : 30px;
    top : -350px;

  }
`

