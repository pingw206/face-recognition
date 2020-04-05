import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';


const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner"> <img alt='logo' src={brain} /> </div>
      </Tilt>
      
    </div>
  )
}

export default Logo;