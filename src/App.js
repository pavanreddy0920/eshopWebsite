import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
