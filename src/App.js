import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext';
import Products from './Component/Products';
import Cart from './Component/Cart';
import ProductPage from './Component/ProductPage';
import NotFound from './Component/NotFound';


function App() {
  return (
    <div>
      <ProductsContextProvider>
      <CartContextProvider>
      <Router>
          <Navbar />
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/ProductPage' exact component={ProductPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
