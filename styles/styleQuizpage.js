import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: calc(100% - 25%);
  margin: 0 auto;
  position: relative;
  @media only screen and (max-width: 365px) {
    width: 100%;
    padding: 10px;
  }
  @media (min-width: 366px) and (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    width: 100%;
    padding: 10px;
  }
`;
export const Title = styled.div`
  width: fit-content;
  margin:auto;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  @media only screen and (max-width: 365px) {
    margin-right: 17px;
  }
  @media (min-width: 366px) and (max-width: 600px) {
    margin-right: 10px;
    margin-top: 30px;
  }
`;

export const TestWrapper = styled.div`
  width:980px;
  margin: auto;
  padding: 10px;
  @media only screen and (max-width: 365px) {
    width: 95%;
    padding: 0;
  }
`;

export const TestBox = styled.div`
  width: 100%;
  margin: 20px 0;
  @media only screen and (max-width: 365px) {
    width: 300px;
  }
`;

export const Question = styled.p`
  width: fit-content;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1.4px;
  line-height: 29px;
  font-style: normal;
  font-size: 22px;
  font-weight: bold !important;
  @media only screen and (max-width: 365px) {
    font-size: 15px;
    width: 100%;
  }
`;

export const Option = styled.label`
  width: 100%;
  display: block;
  margin: 10px 0;
  /* display: flex; */
  align-items: center;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 14px;
  font-size: 16px;
  font-weight: normal;
  font-family: 'PT', sans-serif;
  cursor: pointer;
  input[type="radio"] {
    /* background-color: red; */
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid lightgray;
    border-radius: 50%;
    margin-right: 10px;
    &:checked {
      border: 5px solid #ffbf2b;
    }
  }
  @media only screen and (max-width: 448px) {
    width: 100%;
  }
`;

export const Loading = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid black;
  border-top-color: transparent;
  border-radius: 50%;
  animation-name: loading;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin: auto;
  @keyframes loading {
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg);
  }
  }
`;

export const FinishedButton = styled.button`
  display: block;
  width: 200px;
  margin-bottom: 20px;
  padding: 15px;
  margin: 0 auto 20px;
  cursor: pointer;
  background-color: ${({ process: { loading, error, success } }) =>
    loading
      ? "lightgrey"
      : error
        ? "lightpink"
        : success
          ? "lightgreen"
          : "#DDDDDD"};
  color: ${({ process: { loading, error, success } }) =>
    loading ? "black" : error ? "red" : success ? "green" : "#ffbf2b"};
  border: 0;
  border-radius: 10px;
  transition: .1s;
  font-weight: bold;
  font-size: 23px;
  border: none;
  font-weight: bold;
  &:hover { background-color: ${({ process: { loading, error, success } }) =>
    loading
      ? "grey"
      : error
        ? "red"
        : success
          ? "green"
          : " #fc8823"}; 
      color: ${({ process: { loading, error, success } }) =>
    loading
      ? "lightgrey"
      : error
        ? "lightpink"
        : success
          ? "lightgreen"
          : " #fff"};}
`;

// export const QuizHeader = styled.div`
//   width: 86%;
//   height: 80px;
//   padding: 10px;
//   display: flex;
//   /* justify-content: space-between; */
//   align-items: center;
//   margin: 20px auto;
//   position: relative;
//   border-radius: 13px;
//   @media only screen and (max-width: 448px)  {
//     width: 90%;
//     border: 1px solid black;
//     display: flex;
//     /* justify-content: space-between; */
//     align-items: center;
//   }
//   @media only screen and (max-width: 768px) {
//     width: 90%;
//     border: 1px solid black;
//     display: flex;
//     /* justify-content: space-between; */
//     align-items: center;
//   }
// `;

