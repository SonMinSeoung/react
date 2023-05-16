import { useState, ChangeEvent } from 'react';
import React from 'react';

interface Player {
firstName: string;
lastName: string;
score: number;
}

export default function Scoreboard(): JSX.Element {
const [player, setPlayer] = useState<Player>({
firstName: 'Ranjani',
lastName: 'Shettar',
score: 10,
});

function handlePlusClick() {
setPlayer((prevPlayer) => ({
...prevPlayer,
score: prevPlayer.score + 1,
}));
}

function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
setPlayer((prevPlayer) => ({
...prevPlayer,
firstName: e.target.value,
}));
}

function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
setPlayer((prevPlayer) => ({
...prevPlayer,
lastName: e.target.value,
}));
}

return (
<>
<label>
Score: <b>{player.score}</b>
{' '}
<button onClick={handlePlusClick}>
+1
</button>
</label>
<label>
First name:
<input
       value={player.firstName}
       onChange={handleFirstNameChange}
     />
</label>
<label>
Last name:
<input
       value={player.lastName}
       onChange={handleLastNameChange}
     />
</label>
</>
);
}

/**
 * useState()에 반환되는 변수에 직접적으로 값 수정이 불가능함.
 */