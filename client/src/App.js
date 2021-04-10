import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Mainpage from './Components/mainpage';

function App() {
  return (


    <div className="App">
      <Mainpage/>
    </div>
  );
}

export default App;
