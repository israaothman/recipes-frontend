import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router';

import Home from './components/homePage/Home';
import Fav from './components/favPage/FavPage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user_id, setUser_id] = useState(0);
  const user = {
    username,
    password,
    user_id,
    setUserName,
    setPassword,
    setUser_id
  }

  return (
    <div>
      <Header user={user} />
      <Routes>
        {/* <Switch> */}
        <Route path='/' exact element={<Home user={user} />} />
        <Route path='/favorite' exact element={<Fav user={user} />} />
        {/* </Switch> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
