import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './page/Main/Main';
import Login from './page/Login/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
