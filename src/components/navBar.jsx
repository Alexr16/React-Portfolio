import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    padding: '0.3vw 4vw',
    background: 'rgba(33, 33, 33, 0.7)',
    // borderBottom: '1px solid #dee2e6',
  };
  const ulStyle = {
    display: 'flex',
    gap: '2vw',
    listStyle: 'none',
    padding: '0',
  };
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };
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

  return (
    <nav style={navStyle}>
      <div id="logo" style={logoStyle}>
        <span id="logo-img" />
        <h1 id="logo-text">
          Jorge Rios
        </h1>
      </div>
      <ul style={ulStyle}>
        {/* <li key={1}><NavHashLink smooth to="#HomePage" style={navLinkStyle}>Home</NavHashLink>
        </li>
         */}
        <li key={1}><NavHashLink smooth to="#Portfolio" style={navLinkStyle}>Portfolio</NavHashLink></li>
        <li key={2}><NavHashLink smooth to="#About" style={navLinkStyle}>About</NavHashLink></li>
        <li key={3}><NavHashLink smooth to="#Contact" style={navLinkStyle}>Contact</NavHashLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
