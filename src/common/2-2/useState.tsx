import React, { useState, ChangeEvent } from 'react';

export default function Form(): JSX.Element {
const [firstName, setFirstName] = useState<string>('');
const [lastName, setLastName] = useState<string>('');

function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>): void {
setFirstName(e.target.value);
}

function handleLastNameChange(e: ChangeEvent<HTMLInputElement>): void {
setLastName(e.target.value);
}

function handleReset(): void {
setFirstName('');
setLastName('');
}

return (
<form onSubmit={(e) => e.preventDefault()}>
<input
     placeholder="First name"
     value={firstName}
     onChange={handleFirstNameChange}
   />
<input
     placeholder="Last name"
     value={lastName}
     onChange={handleLastNameChange}
   />
<h1>Hi, {firstName} {lastName}</h1>
<button onClick={handleReset}>Reset</button>
</form>
);
}

/*동적인 데이터를 다룰땐 일반 ts 자료형이 아니라 useState를 사용할것
또 useStatue 는 구조분해 할당을 통해 값을 담은 변수와 변수를 수정할수있는
함수를 반환하는데 그것을 통해서 변수의 값을 조정하게됨. 또 그 함수는
변수의 값을 덮어쓰기 형태로 세팅을 하기때문에 항상 기존값을 그대로 받아와서
연산을 하던 수정을 하는것이 필요함 -notion 참조

TS: 
ChangeEvent<HTMLInputElement>는 React에서 사용되는 이벤트 객체의 타입입니다.
일반적으로 <input> 요소에서 발생하는 이벤트에 대한 타입을 지정하는 데 사용됩니다. 
예를 들어, onChange 이벤트 핸들러에서 이 타입을 사용하면 입력 값이 변경될 때 발생하는 이벤트 객체에 접근할 수 있습니다. -GPT

HTML 의 태그들의 함수나 그 동작들의 인수의 타입을 제공하는 타입들이 많음.
*/