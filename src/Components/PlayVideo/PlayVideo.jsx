import './PlayVideo.css';
// import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { useState } from 'react';
import { API_KEY } from '../../data';

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url);
  };

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
      <h3>Best YouTube Channel To Learn Web Development</h3>
      <div className='play-video-info'>
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt='like pic' />
            125
          </span>
          <span>
            <img src={dislike} alt='dislike pic' />
            12
          </span>
          <span>
            <img src={share} alt='share pic' />
            Share
          </span>
          <span>
            <img src={save} alt='save pic' />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={jack} alt='jack pic' />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>Channel that makes learning Easy</p>
        <p>Subscribe GreatStack to Watch More Tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className='comment'>
          <img src={user_profile} alt='user pic' />
          <div>
            <h3>
              Jack Master <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              voluptas tenetur qui aspernatur nulla id asperiores delectus unde
              consequatur, obcaecati, repellat molestias architecto.
            </p>
            <div className='comment-action'>
              <img src={like} alt='like pic' />
              <span>233</span>
              <img src={dislike} alt='dislike pic' />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className='comment'>
          <img src={user_profile} alt='user pic' />
          <div>
            <h3>
              Jack Master <span>2 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              voluptas tenetur qui aspernatur nulla id asperiores delectus unde
              consequatur, obcaecati, repellat molestias architecto.
            </p>
            <div className='comment-action'>
              <img src={like} alt='like pic' />
              <span>233</span>
              <img src={dislike} alt='dislike pic' />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className='comment'>
          <img src={user_profile} alt='user pic' />
          <div>
            <h3>
              Jack Master <span>14 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              voluptas tenetur qui aspernatur nulla id asperiores delectus unde
              consequatur, obcaecati, repellat molestias architecto.
            </p>
            <div className='comment-action'>
              <img src={like} alt='like pic' />
              <span>233</span>
              <img src={dislike} alt='dislike pic' />
              <span>2</span>
            </div>
          </div>
        </div>
        <div className='comment'>
          <img src={user_profile} alt='user pic' />
          <div>
            <h3>
              Jack Master <span>19 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              voluptas tenetur qui aspernatur nulla id asperiores delectus unde
              consequatur, obcaecati, repellat molestias architecto.
            </p>
            <div className='comment-action'>
              <img src={like} alt='like pic' />
              <span>233</span>
              <img src={dislike} alt='dislike pic' />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
