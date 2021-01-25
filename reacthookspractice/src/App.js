import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown'

function App() {
  const[count, setCount] = useState(0);
  let[choice, setChoice] = useState('-')

  return (
    <div className="App">
      <p>You clicked {count} times</p>
     <button onClick={() => setCount(count+1)}>Add Count</button>
     <p>You've selected the following: {choice}</p>
     <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={() => setChoice(choice = 'Choice1')}>Choice1</Dropdown.Item><br/>
    <Dropdown.Item onClick={() => setChoice(choice = 'Choice2')}>Choice2</Dropdown.Item><br/>
    <Dropdown.Item onClick={() => setChoice(choice = 'Choice3')}>Choice3</Dropdown.Item><br/>
  </Dropdown.Menu>
</Dropdown>
    </div>
  );
}

export default App;
