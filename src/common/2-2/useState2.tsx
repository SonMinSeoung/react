import { useState } from 'react';
import React from 'react';

export default function FeedbackForm() : JSX.Element {
  const [isSent, setIsSent] = useState(false); //타입추론
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
/**
 * Rendered less hooks than expected ERROR :
 * 훅을 사용하는 함수 컴포넌트에서 발생합니다. 
 * 이 오류는 React가 컴포넌트의 상태를 추적하기 위해 훅 호출의 순서와 개수를 기대하는데,
 * 실제로는 기대한 개수보다 적은 훅이 호출된 경우 발생합니다.
 * 
 * 훅이란 언제 읽고 언제 사용되는지 :
 * React는 함수 컴포넌트를 호출하고, 그 결과로 나온 JSX를 렌더링하는 과정에서 훅 호출을 추적합니다.
 * 따라서 React는 훅 호출의 순서와 개수를 예상하고, 컴포넌트의 상태를 관리합니다. 이 때문에 훅은 항상 함수 컴포넌트의 최상위에 위치해야 합니다.
   훅이 최상위에 위치하지 않으면 React는 예상과 다른 훅 호출의 순서나 개수를 발견하게 되어 "Rendered fewer hooks than expected" 오류를 발생시킵니다. 
   이는 훅 호출이 조건부나 루프 내부에 있거나, 다른 훅 호출 전에 호출되지 않는 경우에 발생할 수 있습니다.
   따라서, React의 훅은 최상위에 위치하여 호이스팅되어야 합니다. 이렇게 하면 React가 훅 호출의 순서와 개수를 정확히 파악하고, 컴포넌트의 상태를 올바르게 관리할 수 있습니다.
   -GPT

   본 챌린지에서는 if 분기점에 message 라는 useState()호출이 있었으니 리턴에서 렌더링 하는시점에 훅추적에 실패함
   상단으로 끌어올려서 생성한 후에 시작하면 됨
   
   2-2 마지막 챌린지
   :정적인 변수에 대해서 useState 를 쓸필요가없음을 알려줌
 */