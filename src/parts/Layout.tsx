import type { PropsWithChildren } from 'react';
import './layout.css';
import { LateralMenu } from './LateralMenu';
import { RollingFooter } from './RollingFooter';

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <div className='main'>
      <div className='main-grid'>
        <LateralMenu />
        <div className='content'>{children}</div>
      </div>
      <RollingFooter />
    </div>
  </>
);
