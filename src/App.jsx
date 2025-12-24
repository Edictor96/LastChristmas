import { Routes, Route } from 'react-router-dom';
import RadioPlayer from './components/RadioPlayer';
import Home from './pages/Home';
import Theater from './pages/Theater';
import Puzzle from './pages/Puzzle';
import Confession from './pages/Confession';

function App() {
  return (
    <>
      <RadioPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theater" element={<Theater />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/confession" element={<Confession />} />
      </Routes>
    </>
  );
}

export default App;
