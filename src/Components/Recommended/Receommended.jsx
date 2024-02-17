import './Recommended.css';

import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';

const Recommended = () => {
  return (
    <div className='recommended'>
      <div className='side-video-list'>
        <img src={thumbnail1} alt='thumb pic' />
        <div className='vid-info'>
          <h4>Best chanel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>194K Views</p>
        </div>
      </div>
      <div className='side-video-list'>
        <img src={thumbnail2} alt='thumb pic' />
        <div className='vid-info'>
          <h4>Best chanel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>194K Views</p>
        </div>
      </div>
      <div className='side-video-list'>
        <img src={thumbnail3} alt='thumb pic' />
        <div className='vid-info'>
          <h4>Best chanel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>194K Views</p>
        </div>
      </div>
      <div className='side-video-list'>
        <img src={thumbnail4} alt='thumb pic' />
        <div className='vid-info'>
          <h4>Best chanel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>194K Views</p>
        </div>
      </div>
      <div className='side-video-list'>
        <img src={thumbnail5} alt='thumb pic' />
        <div className='vid-info'>
          <h4>Best chanel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>194K Views</p>
        </div>
      </div>
      <div className='side-video-list'>
        <img src={thumbnail6} alt='thumb pic' />
        <div className='vid-info'>
          <h4>Best chanel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>194K Views</p>
        </div>
      </div>
      <div className='side-video-list'>
        <img src={thumbnail7} alt='thumb pic' />
        <div className='vid-info'>
          <h4>Best chanel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>194K Views</p>
        </div>
      </div>
      <div className='side-video-list'>
        <img src={thumbnail8} alt='thumb pic' />
        <div className='vid-info'>
          <h4>Best chanel that help you to be a web developer</h4>
          <p>GreatStack</p>
          <p>194K Views</p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;