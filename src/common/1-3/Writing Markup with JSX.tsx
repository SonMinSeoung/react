import React from "react";
export default function Bio():JSX.Element {
    return (
      <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br></br>
        <b>And <i>pictures</i></b> of scientists!
      </p>
      </>
    );
  }
  //JSX를 반환할때는 항상 하나로 묶어서 열고 닫아야하며 타입스크립트로 요소의 네임을 정할땐 예약어 때문에 class==className 으로 바꿔준다 
  //JSX도 결국에 자바스크립트이기때문에
  