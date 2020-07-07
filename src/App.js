import React from 'react';
import logo from './logo.svg';
import DropChart from "./components/Chart";
import { covid_data } from "./covid_data";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div>
        <DropChart data="https://raw.githubusercontent.com/YoungOak/web-development/master/covid_data.json"></DropChart>
      </div>
    </div>
  );
}

export default App;
