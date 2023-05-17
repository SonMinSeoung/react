import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import * as One_1Components from './common/1-1/YourFirstComponent';
import * as One_2Components_1 from './common/1-2/Gallery';
import * as One_2Components_2 from './common/1-2/Importing and Exporting Components';
import * as One_2Components_3 from './common/1-2/Profile';
import * as One_3Components_1 from './common/1-3/Writing Markup with JSX';
import * as One_4Components_1 from './common/1-4/JavaScript in JSX with Curly Braces';


export default function App() {
  const components = Object.values(One_1Components);
  const components2_1 = Object.values(One_2Components_1);
  const Components2_2 = Object.values(One_2Components_2);
  const Components2_3 = Object.values(One_2Components_3);
  const Components3_1 = Object.values(One_3Components_1);
  const Components4_1 = Object.values(One_4Components_1);

  function myFunction(Names,num,flag='ul') {
    if (flag === 'ul') {
      return (
        <ul>
          {Names.map((Component, index) => (
            <li key={index}>
              <Link to={`/${num}/${Component.name}`}>{Component.name}</Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <>
          {Names.map((Component, index) => (
            <Route key={index} path={`/${num}/${Component.name}`} element={<Component />} />
          ))}
        </>
      );
    }
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            1-1 YourFirstComponent
            {myFunction(components,'1-1')}
          </ul>
          <ul>
            1-2 Importing and Exporting Components
            {myFunction(components2_1,'1-2')}
            {myFunction(Components2_2,'1-2')}
            {myFunction(Components2_3,'1-2')}
          </ul>
          <ul>
            1-3 Writing Markup with JSX
            {myFunction(Components3_1,'1-3')}
          </ul>
          <ul>
            1-4 JavaScript in JSX with Curly Braces
            {myFunction(Components4_1,'1-4')}
          </ul>
        </nav>
        <Suspense>
          <Routes>
            {myFunction(components,'1-1','no')}
            {myFunction(components2_1,'1-2','no')}
            {myFunction(Components2_2,'1-2','no')}
            {myFunction(Components2_3,'1-2','no')}
            {myFunction(Components3_1,'1-3','no')}
            {myFunction(Components4_1,'1-4','no')}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
