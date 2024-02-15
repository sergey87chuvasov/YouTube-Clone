import './Sidebar.css';

import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertaiment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className='shortcut-links'>
        <div className='side-link'>
          <img src={home} alt='home img' />
          <p>Home</p>
        </div>
        <div className='side-link'>
          <img src={game_icon} alt='game-icon img' />
          <p>Gaming</p>
        </div>
        <div className='side-link'>
          <img src={automobiles} alt='auto img' />
          <p>Automobiles</p>
        </div>
        <div className='side-link'>
          <img src={sports} alt='sport img' />
          <p>Sports</p>
        </div>
        <div className='side-link'>
          <img src={entertaiment} alt='enter img' />
          <p>Entertaiment</p>
        </div>
        <div className='side-link'>
          <img src={tech} alt='tech img' />
          <p>Tecnology</p>
        </div>
        <div className='side-link'>
          <img src={music} alt='music img' />
          <p>Music</p>
        </div>
        <div className='side-link'>
          <img src={blogs} alt='blogsimg' />
          <p>Blogs</p>
        </div>
        <div className='side-link'>
          <img src={news} alt='news img' />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className='side-link'>
          <img src={jack} alt='jack img' />
          <p>PewDiePie</p>
        </div>
        <div className='side-link'>
          <img src={simon} alt='simon img' />
          <p>Mr.Beast</p>
        </div>
        <div className='side-link'>
          <img src={tom} alt='tom img' />
          <p>Justin Bieber</p>
        </div>
        <div className='side-link'>
          <img src={megan} alt='megan img' />
          <p>5-Minute Crafts</p>
        </div>
        <div className='side-link'>
          <img src={cameron} alt='cameron img' />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
