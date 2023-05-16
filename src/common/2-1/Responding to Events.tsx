import React from "react";

export default function LightSwitch() {
    function handleClick() {
        let bodyStyle = (document.body as HTMLElement).style;
        if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
        } else {
        bodyStyle.backgroundColor = 'black';
        }
    }
    return (
        <button onClick={handleClick}>
            Toggle the lights
        </button>
    );
}
//함수를 {}JSX 코드를 ()실행형태로 불러오면 렌더링될때 호출하기때문에 클릭을 했을때 호출하기위해서는 ()를 빼야합니다 

/**
 * 2번 기본동작 방지
 *  <form onSubmit={e => {
      e.preventDefault();
      alert('Submitting!');
    }}>
    이렇게 하면 onSubmit 의 기본 함수호출은 취소하고 alert만 호출하게됨.
    preventDefault() ==> 이벤트의 기본 동작을 취소하는 JavaScript 메서드입니다. 
    주로 폼 제출(submit) 이벤트에서 사용되며, 폼이 제출될 때 기본 동작을 막고 원하는 동작을 수행할 수 있도록 합니다. -GPT
 */