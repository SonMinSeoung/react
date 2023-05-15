import React from 'react';
import './App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Menu Item 1</a></li>
        <li><a href="#">Menu Item 2</a></li>
        <li><a href="#">Menu Item 3</a></li>
      </ul>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        {children}
      </div>
    </div>
  );
}

export default Layout;
