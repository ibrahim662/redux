import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {AddBox} from './actions'

function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("Boxes");

    if (data) {
      setItem(JSON.parse(data));
    }
  }, []);

  const setData = () => {
    if (box) {
      localStorage.setItem(
        "Boxes",
        JSON.stringify([...item, { box }])
      );
    } 
  };

  const box = useSelector(state => state.boxes)
  const dispatch = useDispatch()
  return (
    <div className="App">
  <h1>hello</h1>

  <h1>{box}</h1>
  <button onClick={() => dispatch(AddBox(), setData())
  
  }>add box</button>
  
    </div>
  );
}

export default App;
