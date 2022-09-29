import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Purchases from './pages/Purchases';
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      <MyNavbar />
      {isLoading && <LoadingScreen />}
      <Container fluid>
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
