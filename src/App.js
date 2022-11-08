import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dogs from './components/Dogs.jsx';
import Home from './components/Home';
import Header from './components/Header';
import Breeds from './components/Breeds';

function App() {
  return (
    <div className="container">
        <BrowserRouter>
        <div>
        <Header />
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/all' element ={<Dogs></Dogs>}></Route>
          <Route path='/breeds' element ={<Breeds></Breeds>}></Route>



        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
