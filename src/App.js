import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LoginForm from './pages/loginForm';
import ProductList from './pages/productList';
import Cart from './pages/cart';
import RootLayout from './rootLayout/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="index" element={<LoginForm />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="/product" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
