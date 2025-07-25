import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;