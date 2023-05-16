import React from 'react';
import Profile from './Profile.tsx';
export default function Gallery() : JSX.Element {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
