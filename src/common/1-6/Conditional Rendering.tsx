import React from "react";

interface Item{
    name:string;
    isPacked:boolean;
}


const Item:React.FC<Item> = ({ 
    name,
    isPacked 
    }) => {
    return (
      <li className="item">
        {name} {isPacked?'✔':'X'}
      </li>
    );
  }
  //챌린지 : 삼항연산자로 boolean 판단해서 값 붙히기
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  