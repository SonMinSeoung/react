import { useState } from 'react';
import React from 'react';

interface props {
    color:string;
    time:number;
}

export default function Clock(props:props) :JSX.Element{
  const [color, setColor] = useState(props.color);
  return (
    <h1 style={{ color: color }}>
      {props.time}
    </h1>
  );
}
