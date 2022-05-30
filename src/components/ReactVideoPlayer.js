import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import introVideo from '../videos/pexels.mp4';
// import thum from '../img/thum.jpg';

const ReactVideoPlayer = () => {
  return (
    <Video autoPlay loop>
      <source
        src={introVideo}
        type="video/webm"
        poster="https://www.pexels.com/ru-ru/photo/3622474/"
      />
    </Video>
  );
};

export default ReactVideoPlayer;
