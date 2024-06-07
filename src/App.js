import React from 'react';
import HomePage from './component/HomePage/HomePage';
import Fav from './component/Fav/Fav';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
