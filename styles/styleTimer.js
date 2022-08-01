import styled from "styled-components";

export const TimerWrapper = styled.div`
  width: fit-content;
  position: fixed;
  left: 20px;
  top: 30px;
  /* width: 140px;
  height: 60px; */
  padding: 2px 5px;
  font-size: 50px;
  font-family: digital-font, sans-serif;
  border-radius: 5px;
  z-index: 1;
  outline: none;
  background-color: #fc8823;
  @media only screen and (max-width: 365px) {
    position: relative;
    font-size: 35px;
    top: 40px;
    left: 2px;
  }
  @media (min-width: 366px) and (max-width: 600px) {
    
  }
`;

// export const Progress = styled.div`
//   width: 100%;
//   height: 10px;
//   background-color: lightgray;
//   margin-left: auto;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
// `;

// export const ProgressBar = styled.div`
//   width: ${({ width }) => width}%;
//   background-color: #ffbf2b;
//   height: 100%;
// `;

