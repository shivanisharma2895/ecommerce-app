import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import ProductList from './components/productList';

function App() {
  return (
    
    <BrowserRouter>
    <header>
      <h1><em>QuickShop</em></h1>
      
    </header>
    
    <Routes>
      
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/product' element={<ProductList/>}/>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
