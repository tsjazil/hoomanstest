import React from 'react';
import Navbar from '../Navbar';
import ImagBg from '../ImagBg';
import Card from '../Card';
import Search from '../Search';
import { useState } from 'react';


function HomePage() {

const [query, setQuery] = useState('');

return (
    <div>
      <Navbar query={query} setQuery={setQuery} />
          <ImagBg />
          <h1 className="cardHeader">Movies</h1>
          <Card />
  </div>
);
};


export default HomePage;

