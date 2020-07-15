import React from 'react';
import DropChart from "./components/Chart";
import D3Example from './components/D3Chart.jsx';


function App() {

  return (
    <div className="App">
      <div>
        <p>Gráficas de Casos</p>
        <DropChart data="https://raw.githubusercontent.com/YoungOak/web-development/master/covid_data.json"
                  x="dateRep"
                  y="cases"></DropChart>
        <p>Gráficas de Defunciones</p>
        <DropChart data="https://raw.githubusercontent.com/YoungOak/web-development/master/covid_data.json"
                  x="dateRep"
                  y="deaths"></DropChart>
        <D3Example/>
      </div>
    </div>
  );
}

export default App;
