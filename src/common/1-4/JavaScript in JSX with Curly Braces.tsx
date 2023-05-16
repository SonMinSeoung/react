import React from "react";

interface Person {
    name: string;
    theme: Theme;
  }

interface Theme {
    backgroundColor: string;
    color: string;
  }
  
  const person: Person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList(): JSX.Element {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  //error >>Objects are not valid as a React child
  //객체 참조 .name 
  //TypeScript 인터페이스 객체 정의해서 규칙만들기 그걸 속성에서 타입으로 써서 또 재사용

  /*
  챌린지 2번
  interface Person {
    name: string;
    theme: Theme;
    src: string;
  }
  속성 추가해서 이미지 주소 부분에 
  src={person.src}로 참조 추출

  챌린지 3번
  {}를 사용해서 값을 정의할떄
  src={baseUrl + person.imageId + person.imageSize + '.jpg'}
  하나로 묶어서 사용하기
  
  */









  