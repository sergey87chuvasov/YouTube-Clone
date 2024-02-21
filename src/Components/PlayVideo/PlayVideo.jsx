import './PlayVideo.css';
// import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
// import jack from '../../assets/jack.png';
// import user_profile from '../../assets/user_profile.jpg';
import { useEffect, useState } from 'react';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    // fetch comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
      <div className='play-video-info'>
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : '16K'}{' '}
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}
        </p>
        <div>
          <span>
            <img src={like} alt='like pic' />
            {apiData ? value_converter(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src={dislike} alt='dislike pic' />
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
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ''}
          alt='jack pic'
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : '1M'}{' '}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 255)
            : 'Description Here'}
        </p>
        <p>Subscribe GreatStack to Watch More Tutorials on web development</p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 101}{' '}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className='comment'>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt='user photo'
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{' '}
                  <span>1 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className='comment-action'>
                  <img src={like} alt='like pic' />
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt='dislike pic' />
                  <span>2</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className='comment'>
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
        </div> */}
      </div>
    </div>
  );
};

export default PlayVideo;
