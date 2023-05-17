export function getFinalState<T>(baseState: T, queue: Array<((prevState: T) => T) | T>=[]): T {
    let finalState = baseState;
    
    for (let update of queue) {
      if (typeof update === 'function') {
        finalState = (update as (prevState: T) => T)(finalState);
      } else {
      finalState = update;
      }
    }
    
    return finalState;
    }


    /**
     * queue 매개변수의 타입 제네릭은 Array<((prevState: T) => T) | T>입니다. Array<>: 배열을 나타내는 타입입니다. LIFO
       ((prevState: T) => T) | T: 각 요소는 (prevState: T) => T 형태의 함수 또는 T 타입의 값이 될 수 있습니다. 이는 상태 업데이트 함수 또는 상태 값을 나타냅니다.

       챌린지 : 리액트 큐잉 시스템을 구현하는 문제 
       LINE 7:: as 강제 형변환 
       (prevState: T) => T: 이는 상태 업데이트 함수 타입입니다. 
       (prevState: T)는 이전 상태를 나타내는 매개변수이고, T는 새로운 상태를 반환하는 타입입니다. 이 함수는 이전 상태를 기반으로 새로운 상태를 계산하는 역할을 합니다.| 또는 T 
     */