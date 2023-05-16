import React from "react";

export default function Render():JSX.Element{
    const text = `리액트에서의 렌더링과 커밋은 가상 DOM(Virtual DOM)을 기반으로 이루어지는 과정입니다.

    렌더링(Rendering):
    
    컴포넌트의 상태(State)나 속성(Properties)이 변경되면 리액트는 해당 컴포넌트를 다시 렌더링합니다.
    렌더링은 컴포넌트의 가상 DOM 트리를 구축하는 과정입니다.
    가상 DOM은 컴포넌트의 현재 상태를 반영한 가벼운 복사본입니다.
    조화(Reconciliation):
    
    리액트는 이전 가상 DOM과 현재 가상 DOM을 비교하여 변경된 부분을 식별합니다.
    이 과정을 조화(Reconciliation)라고도 부릅니다.
    변경된 부분만 실제 DOM에 적용하기 위해 업데이트를 수행합니다.
    커밋(Commit):
    
    변경된 부분을 실제 DOM에 적용하는 단계입니다.
    변경 사항을 반영하기 위해 실제 DOM 조작이 이루어집니다.
    이 단계에서 브라우저가 업데이트된 내용을 화면에 그려줍니다.
    이러한 렌더링과 커밋의 과정을 통해 리액트는 효율적으로 UI를 업데이트하고 렌더링 성능을 최적화합니다. 리액트의 가상 DOM은 변경된 부분만 실제 DOM에 적용하여 필요한 업데이트만 수행하므로 성능상 이점을 가지고 있습니다.`;
    return (
        <>
        <div>
            {text}
        </div>
        </>
    )
}