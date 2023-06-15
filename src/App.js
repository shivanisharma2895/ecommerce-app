import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';


function App() {
  return (
    
    <BrowserRouter>
    <header>
      <h1><em>QuickShop</em></h1>
      
    </header>
   
    <Routes>
      
      <Route path='/' element={<LoginForm/>}/>
      
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
