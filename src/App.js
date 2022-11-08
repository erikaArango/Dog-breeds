import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dogs from './components/Dogs.jsx';
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
          <Route path='/listAll' element ={<Dogs></Dogs>}></Route>
          <Route path='/breeds' element ={<Dogs></Dogs>}></Route>


        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
