import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'

const Header: () => JSX.Element = () => {

  return(
    <div className='header'>
      <h1><Link to='/' style={{textDecoration: 'none', fontFamily: 'Arial, Helvetica, sans-serif', color:'white', padding: '4px'}}>Destiny Stats</Link></h1>
    </div>
  );
}

export default Header;