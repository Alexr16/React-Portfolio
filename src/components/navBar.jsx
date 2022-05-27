import { NavHashLink } from 'react-router-hash-link';
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';
import React, { useState } from 'react';
// import Social from './Social';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 769 && showMenu === true) {
      setShowMenu(!showMenu);
    }
  };
  // const ulStyle = {
  //   display: 'flex',
  //   gap: '2vw',
  //   listStyle: 'none',
  //   padding: '0',
  // };

  // const navLinkStyle = {
  //   color: 'white',
  //   textDecoration: 'none',
  // };

  //   const lstLink = ({ isActive }) => ({
  //     textDecoration: isActive ? 'underline' : 'none',
  //     color: '',
  //     borderLeft: '1px solid silver',
  //     paddingLeft: '20px',
  //   });

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    color: 'white',
  };

  // const openButton = {
  //   with: '70px',
  //   height: '50px',
  //   backgroundColor: 'white',
  //   border: 'none',
  //   cursor: 'pointer',
  //   display: 'block',
  // };

  // const hiddeButton = {
  //   display: 'none',
  // };

  // const style = () => {
  //   if (window.innerWidth < 769) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <nav className="nav-style">
      <div id="logo" style={logoStyle}>
        <span id="logo-img" />
        <h1 id="logo-text">
          Jorge Rios
        </h1>
      </div>
      <div className="menu">
        <button className="hamburguer" type="button" label="menu" onClick={() => setShowMenu(!showMenu)}>{showMenu ? (<AiFillCloseCircle />) : (<AiOutlineMenu />)}</button>
      </div>
      <ul className={showMenu ? 'menu-link mobile-menu' : 'menu-link'}>
        <li key={1} className="menu-item"><NavHashLink smooth to="#Portfolio" className="nav-link-style" onClick={handleClick}>Portfolio</NavHashLink></li>
        <li key={2} className="menu-item"><NavHashLink smooth to="#About" className="nav-link-style" onClick={handleClick}>About</NavHashLink></li>
        <li key={3} className="menu-item"><NavHashLink smooth to="#Contact" className="nav-link-style" onClick={handleClick}>Contact</NavHashLink></li>
        {/* {showMenu && window.innerWidth < 769 && <div className="menu-social-container">
        <Social /></div>} */}
      </ul>

    </nav>
  );
};

export default NavBar;
