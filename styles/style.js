import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
   width: calc(100% - 25%);
   margin: 0 auto;
   position: relative;
   @media (max-width: 768px) { width: 95%; margin-top: 70px; }
`

export const Content = styled.div`
   width: 100%;
   margin-top: 30px;
   margin-left: 60px;
   @media (max-width: 768px) { width: 95%; margin: auto;}
`
export const Question = styled.div`
   h3 {
      font-family: 'Poppins', sans-serif;
      letter-spacing: 1.4px;
      line-height: 29px;
      font-style: normal;
      font-size: 20px;
      font-weight: bold !important;
   }
   h2 { margin-left: 10px; }
   /* @media (max-width: 600px) { font-size: 12px; font-weight: !important; letter-spacing: 0.9px;} */
   @media (max-width: 768px) { font-size: 13px; letter-spacing: 0.9px; h2{ font-size: 16px;}}
`
export const Variant = styled.div`
   margin: 13px 0 20px 0;
`
export const Box = styled.label`
   margin: 10px 0;
   display: flex;
   align-items: center;
   border: 1px solid #dcdcdc;
   padding: 10px;
   border-radius: 14px;
   cursor: pointer;
   background-color: ${props => props.test1 ? '#FA8019' : ''};
   input { transform: scale(1.4);}
   label { 
      margin-left: 20px; 
      font-size: 16px;
      letter-spacing: 1px;
      font-style: normal;
      font-family: 'Poppins', sans-serif;
   }
   &:hover { background-color: #f1f1f1; }
`
export const Finished = styled.div`
   text-align: center;
   padding: 30px 0;
   right: 0;
   left: 0;
   position: absolute;
   button {
      padding: 15px 20px 13px 20px;
      width: 150px;
      cursor: pointer;
      font-size: 23px;
      border: none;
      font-weight: bold;
      background-color: #DDDDDD;
      border-radius: 10px;
      transition: .1s;
      font-family: "Poppins", sans-serif;
      font-style: normal;
   a {
   text-decoration: none;
   color: black;
   }
   &:hover { background-color: #fc8823; }
   }
`
export const Home = styled.div`
   position: fixed;
   top: 20px;
   left: 10px;
      span {
         font-style: normal;
         font-weight: 700;
         font-size: 22px;
         font-family: 'Poppins', sans-serif;
         color: #fc8823;
         letter-spacing: 0.5px;
      }
         font-style: normal;
         font-weight: 700;
         font-size: 22px;
         font-family: 'Poppins', sans-serif;
         color: #dddddd;
         cursor: pointer;
         letter-spacing: 0.5px;
   @media (max-width: 768px) { 
      transform: scale(1.1); 
      position: absolute;
      left: 30px; 
      top: 10px; 
      font-size: 21px; 
   }
`
export const Block = styled.div`
   position: fixed;
   margin-top: 30px;
   margin-left: 10px;
   width: 140px;
   height: 60px;
   display: flex;
   border: 1px solid #d0d0d0;
   border-radius: 6px;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   z-index: 1;
   outline: none;
   background-color: #fc8823;
   @media (max-width: 768px) { transform: scale(1.3); top: -12px; right: 50px; font-size: 20px; width: 100px; height: 30px;}
`
export const Minut = styled.h1`
   width: 80%;
   margin: 0 auto;
   text-align: center;
   font-size: 2.4rem;
   font-weight: 700;
   color: #fff;
`
export const BlockItem = styled.div` 
   margin-top: 15px;
   background-color: #fc8823;
   padding: 12px 3px;
   text-align: center;
   border-radius: 6px;
   h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 22px;
      font-weight: 600;
      font-style: normal;
      color: black;
   }
   p { color: red; }
   @media (max-width: 600px) { width: 100%; margin: 30px auto; padding: 10px 0;}
`