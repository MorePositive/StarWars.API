import React from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list'

import './app.css';

const App = () => {
  return (
    <div className="container">
      <Header/>
      <RandomPlanet/>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList/>
        </div>
        {/* <div className="col-md-6">
          <PersonDetails/>
        </div> */}
      </div>
    </div>
  );
};

export default App;