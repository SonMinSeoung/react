import { useState, FormEvent } from 'react';
import React from 'react';


export default function EditProfile() {
const [isEditing, setIsEditing] = useState<boolean>(false);
const [firstName, setFirstName] = useState<string>('Jane');
const [lastName, setLastName] = useState<string>('Jacobs');


const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
setIsEditing(!isEditing);
};


return (
<form onSubmit={handleSubmit}>
<label>
First name:{' '}
{isEditing ? (
<input
value={firstName}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
setFirstName(e.target.value)
}}
/>
) : (
<b>{firstName}</b>
)}
</label>
<label>
Last name:{' '}
{isEditing ? (
<input
value={lastName}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
setLastName(e.target.value)
}}
/>
) : (
<b>{lastName}</b>
)}
</label>
<button type="submit">
{isEditing ? 'Save' : 'Edit'} Profile
</button>
<p><i>Hello, {firstName} {lastName}!</i></p>
</form>
);
}