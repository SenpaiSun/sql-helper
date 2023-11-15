import React from "react";
import {Link} from "react-router-dom";
import logo from '../../image/logo.png'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__list">
          <li className="header__list-item"><Link className="header__list-item-link" to='/'><img className="header__list-item-image" src={logo}/></Link></li>
          <li className="header__list-item"><Link className="header__list-item-link" to='/in-helper'>In-Helper</Link></li>
          <li className="header__list-item"><Link className="header__list-item-link" to='/get-value'>Get value</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header