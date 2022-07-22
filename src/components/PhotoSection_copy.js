import React, { useEffect, useState, useRef, forwardRef } from 'react';
import ImageSlide from './ImageSlide';
import styled from 'styled-components';

import HiteProfile from "../images/hite_profile_crop-removebg.png"
import Pinkfront from "../images/pink_front_crop-removebg.png"
import WithBall from "../images/withball_crop-removebg.png"

import { ReactComponent as Pause} from '../svg/pause.svg';
import { ReactComponent as Right} from '../svg/right.svg';


const PhotoSection = forwardRef((props, ref) => {
  const photoArr = [HiteProfile, Pinkfront, WithBall];
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(2000);
  const [fade, setFade] = useState(true);

  console.log('aa')

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

  function nextPic (e) {
    setIndex(index => (index + 1) % 3) 
  }

  function pause (e) {
    if (delay === null) {
      setDelay(2000)
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
    e.target.childNodes[0].style.fill = '#FC28FB'
  }

  return (
    <>
      <PS ref={ref}>
        <ImageSlide img={photoArr[index]} fade={fade}/>
        <PauseBox onFocus={bigger} onBlur={(delay !== null ? smaller : null)} onMouseOver={bigger} onMouseOut={(delay !== null ? smaller : null)} onClick={pause}>
          <Pause style={{width : 23, height: 23, fill: '#FC28FB',pointerEvents:'none'}}/>
        </PauseBox>
        <RightBox onFocus={bigger} onBlur={smaller} onMouseOver={bigger} onMouseOut={smaller} onClick={nextPic}>
          <Right style={{width : 20, height: 20, fill: '#FC28FB', pointerEvents:'none'}}/>
        </RightBox>
      </PS>
      
    </> 
  )
})

export default PhotoSection

const PS = styled.section`
  width : 100%;
  height : 900px;
  background : #FDEBF7;
  position : relative;

  @media (max-width: 500px) {
    height : 500px;

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
  width : 23px;
  height: 23px;
  bottom: 10.5px;
  right: 50px
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
  bottom: 9px;
  right: 22px
`

