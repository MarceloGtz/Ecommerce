import { HashRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyNavbar from './components/MyNavbar';
import LoadingScreen from './components/LoadingScreen';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Purchases from './pages/Purchases';

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      <MyNavbar />
      {isLoading && <LoadingScreen />}
      <Container className='mt-3'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/purchases' element={<Purchases />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
