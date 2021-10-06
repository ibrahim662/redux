import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {AddBox} from './actions'

function App() {
  const box = useSelector(state => state.boxes)
  const dispatch = useDispatch()
  return (
    <div className="App">
  <h1>hello</h1>

  <h1>{box}</h1>
  <button onClick={() => dispatch(AddBox())}>add box</button>
  
    </div>
  );
}

export default App;
