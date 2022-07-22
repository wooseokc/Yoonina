import React, {forwardRef } from 'react';
import ImageSlide from './ImageSlide';
import styled from 'styled-components';



const PhotoSection = forwardRef((props, ref) => {

  return (
    <>
      <PS ref={ref}>
        <ImageSlide/>
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
    height : 900px;

  }

  overflow : hidden;
`