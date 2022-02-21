import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';

import Home from './components/homePage/Home';
import Fav from './components/favPage/FavPage';
import Header from './components/header/Header';
import Footer  from './components/footer/Footer';

function App() {
  return (
    <div>
       {/* <Navbar/> */}
      <Routes>
        {/* <Switch> */}
          <Route path='/' exact  element={<Home/>} />
          <Route path='/favorite' exact element={<Fav/>} />
        {/* </Switch> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
