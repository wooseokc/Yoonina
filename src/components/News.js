import React, { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const News = forwardRef((props, ref) => {
  const [newArr, setNewsArr] = useState([])
  async function getNews() {
    await axios('http://localhost:8080/blog').then(res => {
      // const obj = JSON.parse(res.data.body)
      setNewsArr(res.data.items)
      console.log(res.data.items)
      
    }) 
  }
  
  // https://us-central1-yooninaweb.cloudfunctions.net/apicall/blog

  useEffect(() => {
    getNews()    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const NewsList = newArr.map((index) => (
    <NewsItem href={index.link} target={"_blank"} rel={'noopener'} key={index.title}>
      <NewsTitle dangerouslySetInnerHTML={ {__html: index.title} }></NewsTitle>
      <NewsDes dangerouslySetInnerHTML={ {__html: index.description} }></NewsDes>
    </NewsItem>

  ))


  return (
    <><TitleBox>News</TitleBox>
    <NewsBox ref={ref}>
      {NewsList}
    </NewsBox></>
  )
});

export default News;

const TitleBox = styled.div`
  margin-top : 100px;
  padding-top : 30px;
  border-top-left-radius:10px;
	border-top-right-radius:10px;
  width : 600px;
  position : relative;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Jua', sans-serif;
  color : #810955;
  display: flex;
  justify-content: center;

  font-size : 50px;
  background : #FDEBF7;
  @media (max-width: 500px) {
    width : 100%;
    margin-top : 70px;
  }
`

const NewsBox = styled.div`
  width : 600px;
  padding-bottom : 30px;
  

  border-bottom-left-radius:10px;
	border-bottom-right-radius:10px;

  position : relative;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Jua', sans-serif;
  color : #810955;
  display: flex;
  flex-direction: column;


  font-size : 50px;

  background : #FDEBF7;

  @media (max-width: 500px) {
    width : 100%;
  }

`

const NewsItem = styled.a`
  display : block;
  width : 450px;
  height : 150px;
  border : 1px solid;
  all: unset;
`

const NewsTitle = styled.button`

  background: none ; 
  border:none; 
  box-shadow:none; 
  border-radius:0; 
  padding:0; 
  cursor:pointer;

  white-space : nowrap;
  overflow: hidden;
  text-overflow : ellipsis;

  
  width : 500px;
  color : #810955;
  font-size : 20px;
  font-weight : 900;
  display : inline-block;
  position : relative;

  left: 50%;
  transform: translateX(-50%);

  &:hover{  
    text-decoration: underline; 
    text-decoration-thickness: 3px;
  }

  @media (max-width: 500px) {
    width : 80%;
    height : 100px;
    white-space : normal;
  }
`

const NewsDes = styled.button`
  background: none ; 
  border:none; 
  box-shadow:none; 
  border-radius:0; 
  padding:0; 
  cursor:pointer;


  width : 400px;
  height : 45px;
  font-size : 15px;
  font-weight : 500;
  position : relative;
  display : inline-block;
  left: 50%;
  transform: translateX(-50%);
  color : black;
  postion : absolute;
  font-family: 'Jua', sans-serif;


  height: 65px;
  word-wrap:break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient:vertical;
  text-overflow:ellipsis;
  overflow:hidden;

  @media (max-width: 500px) {
    display : none;

  }

`