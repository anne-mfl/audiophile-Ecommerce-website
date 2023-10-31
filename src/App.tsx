import './App.css';
import { useLayoutEffect, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from 'components/Nav';
import Home from 'pages/Home';
import Footer from 'components/Footer';
import CategoryPage from 'pages/CategoryPage';
import ProductDetailPage from 'pages/ProductDetailPage';
import Checkout from 'pages/Checkout';
import PageNotFound from 'pages/PageNotFound';
import { useSelector } from "react-redux"
import { RootState } from 'store';

function App() {

  const openModal = useSelector((state: RootState) => state.modal.openModal)

  const Wrapper = ({ children }: { children: React.ReactElement }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  let cart = useSelector((state: RootState) => state.cart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (
    <Wrapper>
      <div className={`font-manrope ${openModal !== 'none' && 'prevent-scroll'}`}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category' element={<CategoryPage />} />
          <Route path='/:category/:slug' element={<ProductDetailPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/404' element={<PageNotFound />} />
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </Wrapper>
  );
}

export default App;
