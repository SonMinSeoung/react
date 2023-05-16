import React, { useState } from 'react';
import { sculptureList } from './data';

interface Sculpture {
name: string;
artist: string;
description: string;
url: string;
alt: string;
}

export default function Gallery(): JSX.Element {
const [index, setIndex] = useState(0); //타입추론
const [showMore, setShowMore] = useState(false);

function handleNextClick(): void {
    if(index != sculptureList.length){
        setIndex(index +1);
    }
}
function handlePreClick():void{
    if(index > 1){
        setIndex(index-1);
    }
}

function handleMoreClick(): void {
setShowMore(!showMore);
}

const sculpture: Sculpture = sculptureList[index];

return (
<>
<button onClick={handleNextClick}>
Next
</button>
<h2>
<i>{sculpture.name} </i>
by {sculpture.artist}
</h2>
<h3>
({index + 1} of {sculptureList.length})
</h3>
<button onClick={handleMoreClick}>
{showMore ? 'Hide' : 'Show'} details
</button>
{showMore && <p>{sculpture.description}</p>}
<img
     src={sculpture.url}
     alt={sculpture.alt}
   />
</>
);
}