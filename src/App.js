import {Routes , Route} from 'react-router-dom'

import './App.css';
import Purchased from './components/purchased/purchased.component';
import ToBuy from './components/to-buy/to-buy.component';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ToBuy />} />
      <Route path="/purchased" element={<Purchased />} />
    </Routes>
  );
}

export default App;
