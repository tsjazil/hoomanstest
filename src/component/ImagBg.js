import React from 'react';
import ImgHero from '../imgs/demo1.png'
import './ImagBg.css'
// import Logo from './logo.svg'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const ImagBg =()=> {
    return (
      <div className="parentHero">
        <section className="hero" style={{ backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ),
url(${ImgHero})` }}>
          <div className="content">
            <h1>Spider-Man : Into The Spider Verse</h1>
            <p>
Spider-Man: Across the Spider-Verse," now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.
            </p>
            <button><FontAwesomeIcon icon={faPlay} /> &nbsp;Start Now</button>
          </div>
        </section>
      </div>
    );
}

export default ImagBg;
