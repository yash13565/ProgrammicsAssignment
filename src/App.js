import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Shows from './Pages/Shows';
import Movie from './Pages/Movies';
import Comedy from './Pages/Comedy';
import Subscribe from './Pages/Subscribe';
import Login from './Pages/Login';
import News from './Pages/News';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shows' element={<Shows />} />
      <Route path='/movies' element={<Movie />} />
      <Route path='/comedy' element={<Comedy />} />
      <Route path='/News' element={<News />} />
      <Route path='/subscribe' element={<Subscribe />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
