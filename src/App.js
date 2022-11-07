import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dogs from './components/Dogs';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home></Home>}></Route>
          <Route path='/dogs/:id' element={<Dogs></Dogs>}></Route>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
