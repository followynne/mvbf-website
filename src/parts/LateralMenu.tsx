import { Link } from 'react-router';
import logo from '../assets/logo.svg';
import './lateral-menu.css';

export const LateralMenu = () => (
  <div className='lateral-menu'>
    <Link to='/'>
      <h1>
        <img className='logo-image' src={logo} />
      </h1>
    </Link>
    <div className='menu-entries'>
      <Link to='/'>Projects</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/blog'>Blog</Link>
    </div>
  </div>
);
