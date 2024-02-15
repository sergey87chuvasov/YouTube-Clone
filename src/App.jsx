import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
