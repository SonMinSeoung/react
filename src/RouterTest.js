import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';
import * as One_1Components from './common/1-1/YourFirstComponent';
import * as One_2Components_1 from './common/1-2/Gallery';
import * as One_2Components_2 from './common/1-2/Importing and Exporting Components';
import * as One_2Components_3 from './common/1-2/Profile';
import * as One_3Components_1 from './common/1-3/Writing Markup with JSX';
import * as One_4Components_1 from './common/1-4/JavaScript in JSX with Curly Braces';
import * as One_5Components_1 from './common/1-5/Passing Props to a Component';
import * as One_5Components_2 from './common/1-5/utils';
import * as One_6Components_1 from './common/1-6/Conditional Rendering';
import * as One_7Components_1 from './common/1-7/Rendering Lists';
import * as One_7Components_2 from './common/1-7/data';
import * as One_7Components_3 from './common/1-7/utils';
import * as One_8Components_1 from './common/1-8/Keeping Components Pure';




export default function App() {
  const components = Object.values(One_1Components);
  const components2_1 = Object.values(One_2Components_1);
  const Components2_2 = Object.values(One_2Components_2);
  const Components2_3 = Object.values(One_2Components_3);
  const Components3_1 = Object.values(One_3Components_1);
  const Components4_1 = Object.values(One_4Components_1);
  const Components5_1 = Object.values(One_5Components_1);
  const Components5_2 = Object.values(One_5Components_2);
  const Components6_1 = Object.values(One_6Components_1);
  const Components7_1 = Object.values(One_7Components_1);
  const Components7_2 = Object.values(One_7Components_2);
  const Components7_3 = Object.values(One_7Components_3);
  const Components8_1 = Object.values(One_8Components_1);

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
          <ul>
            1-5 Passing Props to a Component
            {myFunction(Components5_1,'1-5')}
            {myFunction(Components5_2,'1-5')}
          </ul>
          <ul>
            1-6 Conditional Rendering
            {myFunction(Components6_1,'1-6')}
          </ul>
          <ul>
            1-7 Rendering Lists
            {myFunction(Components7_1,'1-7')}
            {myFunction(Components7_2,'1-7')}
            {myFunction(Components7_3,'1-7')}
          </ul>
          <ul>
            1-8 Keeping Components Pure
            {myFunction(Components8_1,'1-8')}
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
            {myFunction(Components5_1,'1-5','no')}
            {myFunction(Components5_2,'1-5','no')}
            {myFunction(Components6_1,'1-6','no')}
            {myFunction(Components7_1,'1-7','no')}
            {myFunction(Components7_2,'1-7','no')}
            {myFunction(Components7_3,'1-7','no')}
            {myFunction(Components8_1,'1-8','bo')}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
