import { useState } from 'react';
import './projects.css';
import { useIntersectionObserver } from 'usehooks-ts';

const threshold = [0, 0.6, 0.8, 1];
export const Projects = () => {
  const [opacity, setOpacity] = useState(0);
  const { ref } = useIntersectionObserver({
    threshold,
    onChange: (_, entry) => setOpacity(entry.intersectionRatio > 0.7 ? 1 : 0),
  });

  return (
    <>
      <div className='content-title projects'>
        <div>Some of the</div>
        <div>
          selected <span>projects</span>
        </div>
      </div>
      <div className='content-subtext'>
        <img src='/prj_portada.jpg' className='img' />
        <div className='img_text'>
          <div className='main-title'>
            <span>Mytho</span>
            graphia
          </div>
          <div className='sub-title'>Editorial</div>
        </div>
        <div className='text'>
          "The relationships between texts and images, between proper and
          figurative meanings can be organized by design as an experiment to
          reflect on the potentialities of our post-digital graphic era."
        </div>
      </div>

      <div className='content-third-level'>
        <img src='/prj_collage.jpg' className='img' ref={ref} />
        <div className='left-text-wrapper'>
          <div className='left-text' style={{ opacity }}>
            <div>LIMBOLITERARIO</div>
            <div className='smaller'>selected collage based on the book</div>
          </div>
        </div>
      </div>
    </>
  );
};
