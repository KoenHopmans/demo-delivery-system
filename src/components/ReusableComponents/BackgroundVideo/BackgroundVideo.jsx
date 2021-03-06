import React from 'react';
import './BackgroundVideo.css';
import ColorHexagonVideo from '../../../Videos/background-video-hexagon.mp4';
import MusicPlayerVideo from '../../../Videos/music-player-tv__video.mp4';
import DonDiabloVideo from '../../../Videos/videoplayback.mp4';
import BlueStar from '../../../Videos/blue-star-background.mp4';
import BlueHexagon from '../../../Videos/blue-hexagon-stars.mp4';
import PageNotFound from '../../../Videos/background-page-not-found.mp4';

const BackgroundVideo = ({ video = 'blueStar' }) => {
  const chosenVideo = () => {
    switch (video) {
      case 'colorHexagonVideo':
        return ColorHexagonVideo;
      case 'donDiablo':
        return DonDiabloVideo;
      case 'blueStar':
        return BlueStar;
      case 'blueHexagon':
        return BlueHexagon;
      case 'pageNotFound':
        return PageNotFound;
      default:
        return MusicPlayerVideo;
    }
  };
  return (
    <div>
      <video className="background-video" autoPlay loop muted>
        <source src={chosenVideo()} type="video/mp4" />
        <track kind="captions" label="Hexagon background" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
