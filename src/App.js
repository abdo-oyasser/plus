import './App.css';
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Games from './components/Games';
import Games1v1 from './components/Games1v1';
import Games2v2 from './components/Games2v2';
import data from "./jsons/games.json"
import Explain from './components/Explain';
import Players from './components/games/Players';
import { useEffect, useState } from 'react';
import ScrollZero from './components/ScrollZero';
import Mazad from './components/games/Mazad';
import Fiveinten from './components/games/Fiveinten';


function App() {
  let [scroll, setScroll] = useState(window.scrollY)
  window.onscroll = () => {
    setScroll(window.scrollY)
  }
  return (

    <div className='container'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/games/onevone' element={<Games1v1 />} />
        <Route path='/games/twovtwo' element={<Games2v2 />} />
        {data.map((ele) => {
          return <Route path={`/games/explain/${ele.enTitle}`} element={<Explain explain={ele.explain} title={ele.title} />} />
        })}
        <Route path='games/players' element={<Players />} />
        <Route path='games/Mazad' element={<Mazad />} />
        <Route path='games/Fiveinten' element={<Fiveinten />} />
      </Routes>
      <ScrollZero />
    </div>
  );
}

export default App;
