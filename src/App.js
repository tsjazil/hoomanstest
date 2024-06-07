// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import React from 'react';
// import MovieList from './MovieList';
import HomePage from './component/HomePage/Dark';
import Fav from './component/Fav/Dark';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
// import ImagBg from './component/ImagBg';
// import Card from './component/Card';

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
        // <div>
        //     <Fav/>
        // </div>
