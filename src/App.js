import { React} from 'react';

import ListSensors from './components/ListSensors/ListSensors';

import './App.css';
import ListBtton from './components/ListButton/ListButton';

function App() {
 
  return (
    <div className="App container d-flex flex-culomn flex-wrap mt-4">
      <ListBtton/>
      <ListSensors/>
    </div>
  );
}

export default App;
