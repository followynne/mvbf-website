import './parts/layout.css';
import { LateralMenu } from './parts/LateralMenu';
import { Outlet, useLocation } from 'react-router';
import { RollingFooter } from './parts/RollingFooter';
import { useEffect } from 'react';

const CONTENT_SELECTOR = '.content';
function useResetContentScrollPosition() {
  const { pathname } = useLocation();

  useEffect(() => {
    const content = document.querySelector(CONTENT_SELECTOR);
    if (!content) return;

    content.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
}

const App = () => {
  useResetContentScrollPosition();

  return (
    <div className='main'>
      <div className='main-grid'>
        <LateralMenu />
        <div className='content'>
          <Outlet />
        </div>
      </div>
      <RollingFooter />
    </div>
  );
};

export default App;
