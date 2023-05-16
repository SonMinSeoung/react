import React from "react";

interface ClockProps {
time: Date;
}

const Clock: React.FC<ClockProps> = ({ time }) => {
let hours = time.getHours();
let className: string;
if (hours >= 0 && hours <= 6) {
className = 'night';
} else {
className = 'day';
}
return (
<h1 className={className}>
{time.toLocaleTimeString()}
</h1>
);
};

export default Clock;