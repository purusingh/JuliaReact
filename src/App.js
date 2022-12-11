import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './components/classes/mycls';
import FunctHello from './components/functionals/myfunction';


function App() {

  var v1 = "name";
  var v2 = "name1";

  var arr = ["abc","bcd","dfdsfd"];
  return (
    <div className="App">
      
      <Hello />
      <Hello />
      <Hello />
      <FunctHello hh={v1} myarr={arr}></FunctHello>



    </div>
  );
}


export default App;
