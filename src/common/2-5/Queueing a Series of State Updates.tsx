import { useState } from 'react';
import React from 'react';

export default function RequestTracker(): JSX.Element {
const [pending, setPending] = useState(0);
const [completed, setCompleted] = useState(0);

async function handleClick(): Promise<void> {
setPending(y => y + 1);
await delay(3000);
setPending(n => n - 1);
setCompleted(x => x + 1);
}

return (
<>
<h3>
Pending: {pending}
</h3>
<h3>
Completed: {completed}
</h3>
<button onClick={handleClick}>
Buy
</button>
</>
);
}

function delay(ms: number): Promise<void> {
return new Promise(resolve => {
setTimeout(resolve, ms);
});
}

/**
 * 챌린지 : 리액트의 상태 업데이트가 비동기적으로 처리됨.
 * 상태업데이트는 큐에 추가하고 한번에 모든업데이트를 일괄적으로처리함
 * ex) 요청사항 다받음 행동에 다처리함
 * 근데 또 함수형 업데이트는 이전 상태값을 받아와서 수행함
 * useState() 반환 두번쨰인자 =>fn
 * 
 * Promise,async,await :
 * JS 비동기처리 객체(Promise) 와 예약어
 * Promise는 비동기처리 작업의 결과를 나타냄
 * 비동기 작업 성공유무에 따라 실행되는 메서드가 있음
 * S:resolve() F:reject() 로 비동기를 시도할때 분기를 할 수 있음
 * 참고 :: promise 객체의 생성자함수에는 new(this)가 붙고 매개변수로
 * 성공 실패의 함수를 받는 콜백함수임
 * async는 반드시 promise 객체를 반환해야한다는 예약어
 * await 키워드는 비동기 작업의 결과를 기다려줌
 * 비동기처리의 어지러운 처리상태를 동기적으로 작성가능하게해줌
 * 
 */