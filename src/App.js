import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Breeds from './components/Breeds';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/breeds' element ={<Breeds></Breeds>}></Route>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
