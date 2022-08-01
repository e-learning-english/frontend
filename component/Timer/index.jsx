import React, { Component, useState, useEffect } from "react";
import { Progress, ProgressBar, TimerWrapper } from "../../styles/styleTimer";


function Timer({ setTimeOut }) {
  const secondDuration = 30 * 60;
  // const secondDuration = 6;
  const [second, setSecond] = useState(secondDuration);


  useEffect(() => {
    let timeout = setTimeout(() => {
      setSecond(second - 1);
      // console.log(second);
    }, 1000);
    if (second <= 0) {
      clearTimeout(timeout);
      setTimeOut(true);
    }
  }, [second]);

  return (
    <TimerWrapper>
      {Math.trunc(second / 60)}:{(second % 60 < 10 ? "0" : "") + (second % 60)}
      {/* <Progress>
        <ProgressBar
          width={(second / secondDuration) * 30}
        ></ProgressBar>
      </Progress> */}
    </TimerWrapper>
  );
}

export default Timer;
