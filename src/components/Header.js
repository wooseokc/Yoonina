import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";

import MainLogo from "../images/mainLogo1.png"

import { ReactComponent as Menu} from '../svg/menu.svg';

const Header = forwardRef((props, ref) => {
  const [white, setWhite] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
 
  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (menu) {
      window.addEventListener('scroll', ()=> setMenu(false))
    }
  })

  function moveToCareer () {
    window.scrollTo(0, ref.ToCareer.current.offsetTop-100)
    setMenu(false)
  }

  function moveToSchedule () {
    window.scrollTo(0, ref.ToSchedule.current.offsetTop-150)
    setMenu(false)
  }

  function moveToHome () {
    window.location.replace('/')
    setMenu(false)
  }

  function moveToNews () {
    window.scrollTo(0, ref.ToNews.current.offsetTop-120)
    setMenu(false)
  }
  
  function moveToContact () {
    window.scrollTo(0, 9999999999999)
    setMenu(false)
  }
  function moveToTop () {
    window.scrollTo(0, 0)
    setMenu(false)
  }

  function makeBackGround ([entry]) {
    if (!entry.isIntersecting) {
      setWhite(true)
    } else {
      setWhite(false);
    }
  }

  function menuChange () {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true);
    }
  }

  useEffect(() => {
    let observer;
    const current = ref.ForHeader.current
    if (current) {
      observer = new IntersectionObserver(makeBackGround, {threshold: 0.00001})
      observer.observe(current)
    }
  }, [ref.ForHeader])



  

  return(

    <HeaderSection style={white ? {background : 'white'} : {backgound : ''}}>
      <Logo onClick={moveToHome} src={MainLogo} alt="로고">
      </Logo>
      {width > 500 ? 
      <ButtonContainer>
        <HeaderButton onClick={moveToTop}>Home</HeaderButton>
        <HeaderButton onClick={moveToCareer}>Career</HeaderButton>
        <HeaderButton onClick={moveToSchedule}>Schedule</HeaderButton>
        {/* <HeaderButton onClick={moveToNews}>News</HeaderButton> */}
        <HeaderButton onClick={moveToContact}>Contact</HeaderButton>
      </ButtonContainer> : 
      <>
        <PhoneHeader>
          <Menu onClick={menuChange} style={!menu ? {visibility: 'visible'} : {visibility: 'hidden'}}></Menu>
        </PhoneHeader>
        <PhoneContainer white={white} menu={menu}>
          <PhoneButton onClick={moveToTop}>Home</PhoneButton>
          <PhoneButton onClick={moveToCareer}>Career</PhoneButton>
          <PhoneButton onClick={moveToSchedule}>Schedule</PhoneButton>
          {/* <PhoneButton onClick={moveToNews}>News</PhoneButton> */}
          <PhoneButton onClick={moveToContact}>Contact</PhoneButton>
        </PhoneContainer>    
      </>
      }
    </HeaderSection>

  )
})

export default Header

const HeaderSection = styled.section`
  position : fixed;
  z-index: 9999;
  width :100%;
  height : 41px;
  padding-top :20px;



`

const Logo = styled.img`
  position: relative;
  left : 2%;
  width : 15%;
  cursor:pointer;
`

const ButtonContainer = styled.div`
  display : flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top : 35px;
  
  @media (max-width: 500px) {
  }
`



const HeaderButton = styled.button`
  background: inherit ; 
  border:none; 
  box-shadow:none; 
  border-radius:0; 
  padding:0; 
  overflow:visible; 
  cursor:pointer;

  font-size : 15px;
  color: #CA4E79;
  margin-left : 35px;
`

const PhoneHeader = styled.div`
  position : relative;
  top : -25px;
  left : 90%;
`

const PhoneContainer = styled.div`
  position : absolute;
  top : 10px;
  right : 10px;
  background : #none;
  width : 90px;
  height : 140px;
  border-radius : 15px;
  background : none;
  display :   ${props => props.menu ? 'flex' : 'none' };
  flex-direction: column;



`

const PhoneButton = styled.button`
background: inherit ; 
border:none; 
box-shadow:none; 
border-radius:0; 
padding:0; 
overflow:visible; 
cursor:pointer;
background : none;

display : block;
font-size : 20px;
color: #CA4E79;
text-align: end;
margin-bottom : 5px;

`