import React, { Fragment } from 'react';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
