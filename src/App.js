import React from 'react';
import DropChart from "./components/DropChart";


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
      </div>
    </div>
  );
}

export default App;
