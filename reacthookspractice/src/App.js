import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown'





function App() {
  const[count, setCount] = useState(0);
  let[choice, setChoice] = useState('-');
  const choices = ['ChoiceOne','ChoiceTwo','ChoiceThree']

  return (
    <div className="App">
      <p>You clicked {count} times</p>
     <button onClick={() => setCount(count+1)}>Add Count</button>

     <p>You've selected the following: {choice}</p><br/>

     <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
      {choices.map((name)=>
      <Dropdown.Item onClick={()=> setChoice(choice=name)}>{name}</Dropdown.Item>)}
      </Dropdown.Menu>
  </Dropdown>

    </div>
  );
}

export default App;
