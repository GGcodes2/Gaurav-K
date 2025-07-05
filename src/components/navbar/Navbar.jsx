import React from 'react'
import Footer from '../footer/Footer'
import './Navbar.css'
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
  const [extended, setExtended] = React.useState(false);

  return (
    <>
      <div className="header">
        <ul>
          <li className='home' onClick={() => window.open("/", "_self")}>Home</li>
          <li onClick={() => window.open("/about", "_self")}>About</li>
        </ul>
        <TiThMenu className='menu-icon' onClick={() => setExtended(prev => !prev)} />
      </div>
      <Footer extended={extended} />
    </>
  );
};

export default Navbar;
