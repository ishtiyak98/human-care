import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LogIn from './components/LogIn/LogIn';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/register' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
