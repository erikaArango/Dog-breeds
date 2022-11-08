import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Breeds from './components/Breeds';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
        <BrowserRouter>
        <div>
        <Header />
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/breeds' element ={<Breeds></Breeds>}></Route>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
