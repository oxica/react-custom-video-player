import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import introVideo from '../videos/colors.mp4';
import thum from '../img/thum.jpg';

const ReactVideoPlayer = () => {
  return (
    <Video autoPlay loop>
      <source src={introVideo} type="video/webm" poster={thum} />
    </Video>
  );
};

export default ReactVideoPlayer;
