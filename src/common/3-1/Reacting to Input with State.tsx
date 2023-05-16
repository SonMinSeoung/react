import { useState } from 'react';
import React from 'react';


export default function Picture() {
const [isActive, setIsActive] = useState<boolean>(false);


let backgroundClassName: string = 'background';
let pictureClassName: string = 'picture';
if (isActive) {
pictureClassName += ' picture--active';
} else {
backgroundClassName += ' background--active';
}


return (
<div
className={backgroundClassName}
onClick={() => setIsActive(false)}
>
<img
onClick={(e: React.MouseEvent<HTMLImageElement>) => {
e.stopPropagation();
setIsActive(true);
}}
className={pictureClassName}
alt="Rainbow houses in Kampung Pelangi, Indonesia"
src="https://i.imgur.com/5qwVYb1.jpeg"
/>
</div>
);
}