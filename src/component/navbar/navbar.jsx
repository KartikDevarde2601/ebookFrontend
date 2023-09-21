// Navbar.js
import React from 'react';
import style from './navbar.module.css';
import logo from '../../asset/logo.png';
import bookmarkIcon from '../../asset/bookmarkIcon.png';
import userIcon from '../../asset/userIcon.png';

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} alt="logo" className={style.logoImg} />
        <div>
          <h1 className={style.logoTitle}>eLibrary</h1>
          <p className={style.logoSubtitle}>By kartik</p>
        </div>
      </div>
      <div className={style.searchbox}>
        <input type="search" placeholder="Search book" className={style.searchInput} />
      </div>
      <div className={style.icons}>
        <img src={bookmarkIcon} alt="bookmark" className={style.icon} />
        <img src={userIcon} alt="user" className={style.icon} />
      </div>
    </div>
  );
};

export default Navbar;
