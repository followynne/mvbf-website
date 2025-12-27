import { v4 } from 'uuid';
import './rolling-footer.css';

const Texts = () =>
  new Array(10).fill(' DESIGN IS NEVER FINISHED').map((t) => (
    <div className='text-scroll' key={v4()}>
      <span>{t}</span> <span>➟</span>
    </div>
  ));

export const RollingFooter = () => {
  return (
    <div className='rolling-footer'>
      <div className='scroll-container'>
        <div className='text-row'>
          <div className='infinite-scroll'>
            <Texts />
          </div>
        </div>
      </div>
    </div>
  );
};
