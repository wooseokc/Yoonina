import React from "react";
import styled from "styled-components";

import { ReactComponent as Insta} from '../svg/instagram.svg';
import Crowning from '../images/crownin.png'

const Contact = () => {


  return (
    <ContactBox>
      <NoticeBox>본 페이지는 윤이나 프로와 선수의 소속사와 합의되지 않은 비영리 목적으로 만들어진 팬페이지입니다.</NoticeBox>
      <NoticeBox> 페이지에 관한 문제나 결함 발생시 아래 메일로 연락주시면 감사하겠습니다.</NoticeBox>
      <Mail href="mailto:wschun95@naver.com"> wschun95@naver.com </Mail>
      <ToYoon>Contact to 윤이나 :</ToYoon>
      <InfoBox>
        <InfoList href="https://www.instagram.com/yoon_2naa/"  target={"_blank"} rel={'noopener'}>
            <SVGBox>
              <Insta styled={{position: 'relative', top :20}}></Insta>
            </SVGBox>
            @yoon_2naa
        </InfoList>
        <InfoList href="https://cafe.naver.com/enayoune"  target={"_blank"} rel={'noopener'}>
          <NaverCafe src="https://search.pstatic.net/common/?src=https%3A%2F%2Fditto-phinf.pstatic.net%2F20210629_221%2F16249614894899bT87_PNG%2F58044602a64c61fad0fe8dd8a36a4b6f.png"></NaverCafe>
          유니버디
        </InfoList>
        <InfoList href="http://www.crowning.co.kr/"  target={"_blank"} rel={'noopener'}>
          <NaverCafe style={{width : 40, height :30}} src={Crowning}></NaverCafe>
          &#40;주&#41;크라우닝
        </InfoList>
      </InfoBox>
    </ContactBox>
  )
}

export default Contact;

const ContactBox = styled.div`
  margin-top : 100px;
  width : 100%;
  height: 170px;


  background : #524A4E;

  @media (max-width: 500px) {
    padding-top : 10px;
  };

`

const NoticeBox = styled.p`
  margin : 0;
  text-align : center;
  font-size : 12px;
  color : #FFF;
  @media (max-width: 500px) {
    display : none;
  };
`

const ToYoon = styled.p`

  margin : 5px;
  text-align : center;
  font-size : 20px;
  color : #FFF;
`

const Mail = styled.a`
  all: unset; 
  cursor:pointer;
  color : #fff;
  font-size : 12px;
  position: relative;
  display : block;
  text-align : center;
  @media (max-width: 500px) {
    display : none;
  };
`

const InfoBox = styled.div`
  width : 700px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display : flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    width : 250px;
  };

`

const SVGBox = styled.div`
  position: relative;
  display : inline-block;
  top : -2px;
`

const InfoList = styled.a`
  all: unset; 
  cursor:pointer;
  width : 180px;
  color : #fff;
  font-weight : 500;
  display : flex;
  padding-top : 10px;
  justify-content: center;

  @media (max-width: 500px) {
    width : 150px;
    padding-left : 50px;
  };


`

const NaverCafe = styled.img`
  width : 30px;
  height : 30px;
  border-radius : 20px;
  position: relative;
  margin-right : 10px;
  top : -2px;
`