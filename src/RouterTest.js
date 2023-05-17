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
import * as One_7Components_3 from './common/1-7/utils';
import * as One_8Components_1 from './common/1-8/Keeping Components Pure';
import * as Two_1Components_1 from './common/2-1/Responding to Events';
import * as Two_2Components_1 from "./common/2-2/State: A Component's Memory";
import * as Two_2Components_2 from "./common/2-2/useState";
import * as Two_2Components_3 from "./common/2-2/useState2";
import * as Two_3Components_1 from "./common/2-3/Render and Commit";
import * as Two_4Components_1 from "./common/2-4/State as a Snapshot";
import * as Two_5Components_1 from "./common/2-5/Queueing a Series of State Updates";
import * as Two_6Components_1 from "./common/2-6/Updating Objects in State";
import * as Two_7Components_1 from "./common/2-7/Updating Arrays in State";





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
  const Components7_3 = Object.values(One_7Components_3);
  const Components8_1 = Object.values(One_8Components_1);
  const Components21_1 = Object.values(Two_1Components_1);
  const Components22_1 = Object.values(Two_2Components_1);
  const Components22_2 = Object.values(Two_2Components_2);
  const Components22_3 = Object.values(Two_2Components_3);
  const Components23_1 = Object.values(Two_3Components_1);
  const Components24_1 = Object.values(Two_4Components_1);
  const Components25_1 = Object.values(Two_5Components_1);
  const Components26_1 = Object.values(Two_6Components_1);
  const Components27_1 = Object.values(Two_7Components_1);


  function myFunction(Names,num,flag='ul') {
    if (flag === 'ul') {
      return (
        <ul style={{justifyContent:'center'}}>
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
      <div style={{ display: 'flex'}}>
        <nav style={{marginRight: 'auto'}}>
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
            {myFunction(Components7_3,'1-7')}
          </ul>
          <ul>
            1-8 Keeping Components Pure
            {myFunction(Components8_1,'1-8')}
          </ul>
        </nav>
        <nav style={{marginRight: 'auto'}}>
          <ul>
              2-1 Responding to Events
              {myFunction(Components21_1,'2-1')}
          </ul>
          <ul>
              2-2 State: A Component's Memory
              {myFunction(Components22_1,'2-2')}
              {myFunction(Components22_2,'2-2')}
              {myFunction(Components22_3,'2-2')}
          </ul>
          <ul>
              2-3 Render and Commit
              {myFunction(Components23_1,'2-3')}
          </ul>
          <ul>
              2-4 State as a Snapshot
              {myFunction(Components24_1,'2-4')}
          </ul>
          <ul>
              2-5 Queueing a Series of State Updates
              {myFunction(Components25_1,'2-5')}
          </ul>
          <ul>
              2-6 Updating Objects in State
              {myFunction(Components26_1,'2-6')}
          </ul>
          <ul>
              2-7 Updating Arrays in State
              {myFunction(Components27_1,'2-7')}
          </ul>
        </nav>
        <nav style={{marginRight: 'auto'}}>
          <ul>
            <li> 이렇게되면 어찌되는건가333요?</li>
          </ul>
        </nav>
        <nav style={{marginRight: 'auto'}}>
          <ul>
            <li> 이렇게되면 어찌되는건가444요?</li>
          </ul>
        </nav>
        <div style={{ display: 'flex',alignItems: 'center' }}>
        <main>
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
            {myFunction(Components7_3,'1-7','no')}
            {myFunction(Components8_1,'1-8','no')}
            {myFunction(Components21_1,'2-1','no')}
            {myFunction(Components22_1,'2-2','no')}
            {myFunction(Components22_2,'2-2','no')}
            {myFunction(Components22_3,'2-2','no')}
            {myFunction(Components23_1,'2-3','no')}
            {myFunction(Components24_1,'2-4','no')}
            {myFunction(Components25_1,'2-5','no')}
            {myFunction(Components26_1,'2-6','no')}
            {myFunction(Components27_1,'2-7','no')}

          </Routes>
        </Suspense>
        </main>
      </div>
      </div>
    </Router>
  );
}
