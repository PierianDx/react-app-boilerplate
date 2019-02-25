import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { ReactComponent as Logo } from '../../assets/text-mark-transparent-darkbg.svg';

export default () => {
  const menuRef = useRef(null);
  const [menuActive, toggleMenu] = useState(false);

  const handleClick = ev => {
    ev.preventDefault();
    toggleMenu(!menuActive);
  };

  const handleClickOutside = ev => {
    if (!menuRef.current.contains(ev.target)) {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  });

  return (
    <nav
      ref={menuRef}
      className="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <b className="navbar-item">
          <Logo height="28" width="100" />
        </b>

        <button
          className={cx('navbar-burger burger as-link', { 'is-active': menuActive })}
          aria-label="menu"
          aria-expanded="false"
          data-target="main-navigation"
          onClick={handleClick}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div id="main-navigation" className={cx('navbar-menu', { 'is-active': menuActive })}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/" onClick={handleClick}>
            Home
          </Link>
          <Link className="navbar-item" to="/another-[page/" onClick={handleClick}>
            Another
          </Link>
        </div>
      </div>
    </nav>
  );
};
