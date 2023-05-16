import React from "react";
import { ReactDOM } from "react";

//기본으로 내보낼때 예약어 export default
export function Profile(): JSX.Element {
   return(
    <img
    src="https://i.imgur.com/lICfvbD.jpg"
    alt="Aklilu Lemma"
  />
  )
}

//return 문 바로 다음에 JSX 다른경우 ()감싸주기
export function Profile2(): JSX.Element {
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
}

function Profile3() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

//컴포넌트명 첫글자는 대문자로
export function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile3 />
      <Profile3 />
      <Profile3 />
    </section>
  );
}
