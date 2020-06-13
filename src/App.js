import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import { Size } from './components/Products';
import { Items } from './components/Products'

function App() {
  return (
    <div className="store container-fluid">
      <div class="row">
        <div class="side col-md-2">
          <p>Sizes:</p>
          <Size />
          <p class="text-center">Leave a star on github if this repository was useful :)</p>
          <p class="text-center">
            <button type="button" class="btn btn-primary mr-2"><img src="/assets/icons/star-fill.svg" alt="" width="15" height="15" title="Bootstrap"/> Star</button>
            <button class="btn btn-secondary disabled" type="submit">848</button>
				  </p>
        </div>

        <div class="main col-md-10">
            <Nav />
            <Items />
        </div>
      </div>
    </div>
  );
}

export default App;
