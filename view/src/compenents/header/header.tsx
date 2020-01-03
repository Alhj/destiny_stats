import React from 'react'
import {Link} from 'react-router-dom';
import './header.css'

const Header: () => JSX.Element = () => {

  return(
    <div className='header'>
      <Link to='/' style={{textDecoration: 'none'}}><h1>Destiny Stats</h1></Link>
    </div>
  );
}

export default Header;