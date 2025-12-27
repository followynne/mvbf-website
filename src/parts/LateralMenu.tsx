import logo from '../assets/logo.svg';
import './lateral-menu.css';

export const LateralMenu = () => (
  <div className='lateral-menu'>
    <a href='/'>
      <h1>
        <img className='logo-image' src={logo} />
      </h1>
    </a>
    <div className='menu-entries'>
      <a>Projects</a>
      <a>About</a>
      <a>Contact</a>
      <a>Blog</a>
    </div>
  </div>
);
