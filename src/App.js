import './App.css';
import { BrowserRouter , Routes, Route, NavLink } from 'react-router-dom';
import Login from './components/loginForm';


function App() {
  return (
    
    <BrowserRouter>
    <header>
      <h1><em>QuickShop</em></h1>
      <nav>
        <NavLink to='cart'>Cart</NavLink>
      </nav>
    </header>
   
    <Routes>
      
      <Route path='/' element={<Login/>}/>
      
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
