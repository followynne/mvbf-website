import { useIntersectionObserver } from 'usehooks-ts';
import './App.css';
import logo from './assets/logo.svg';
import { useState } from 'react';

function App() {
  const [opacity, setOpacity] = useState(0);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: [0, 1],
    onChange: (_, entry) => {
      setOpacity(entry.intersectionRatio);
    },
  });
  console.log('isIntersecting', isIntersecting);

  return (
    <div className='main'>
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
      <div className='content'>
        <div className='content-title'>
          <div>Some of the </div>
          <div>
            selected <span>projects</span>
          </div>
        </div>
        <div className='content-subtext'>
          <div className='text'>
            "The relationships between texts and images, between proper and
            figurative meanings can be organized by design as an experiment to
            reflect on the potentialities of our post-digital graphic era."
          </div>
        </div>
        <div
          style={{
            color: 'rgba(0, 0, 0)',
            opacity,
            transition: 'ease-in 0.7s',
            fontSize: '36px',
          }}>
          LIMBOLITERARIO LIMBOLITERARIO
        </div>
        <div ref={ref} style={{ height: '36px', visibility: 'hidden' }} />
      </div>
    </div>
  );
}

export default App;
