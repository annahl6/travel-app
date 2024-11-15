import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home';
import Carousel from './components/HomePage/Carousel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Carousel />}/>
        <Route path="/home" element={<Carousel />}/>        
        <Route path="/*" element={<h1>Not Found: 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
