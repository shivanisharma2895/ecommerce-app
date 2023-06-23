import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LoginForm from './components/loginForm';
import ProductList from './components/productList';
import Cart from './components/cart';
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
    // <BrowserRouter>
    // <header>
    //   <h1><em>QuickShop</em></h1>
    // </header>
    // <Routes>
    //   <Route path='/' element={<LoginForm/>}/>
    //   <Route path='/product' element={<ProductList/>}/>
    //   <Route path='/cart' element={<Cart/>}/>
    // </Routes>
    // </BrowserRouter>


  );
}

export default App;
