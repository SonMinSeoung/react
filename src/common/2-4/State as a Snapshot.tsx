import { useState } from 'react';
import React from 'react';

export default function TrafficLight(): JSX.Element {
  const [walk, setWalk] = useState(true);


  function handleClick() {
    setWalk(!walk);
    alert(walk ? 'stop is next' : 'walk is noxt');

  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
/*
 React 스냅샷(Snapshot)은 React 컴포넌트의 현재 상태를 정적인 형태로 저장하고 재사용할 수 있는 기능입니다. 
 스냅샷은 UI 컴포넌트의 렌더링 결과를 사전에 계산하여 저장하므로, 동일한 결과를 다시 계산할 필요 없이 재사용할 수 있어 성능 향상을 이룰 수 있습니다. -GPT

 챌린지 : 
  onclick을 통해서 handleClick이 호출될때 walk값은 해당 스코프안에서 정적인 상태로 재사용하기때문에 바로 alert()을 띄우고 삼항연산자로 후처리를한다.
*/
