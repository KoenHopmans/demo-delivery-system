import React from 'react';
import { useParams } from 'react-router';
import BackgroundVideo from '../ReusableComponents/BackgroundVideo/BackgroundVideo';
import NavigationBar from '../ReusableComponents/NavigationBar/NavigationBar';
import Header from '../ReusableComponents/Header/Header';
import tracks from '../TrackLists/TrackListHexagon';
import FooterHexagon from '../ReusableComponents/Footer/FooterHexagon';
import NewAudioPlayer from '../ReusableComponents/AudioPlayer/NewAudioPlayer';
import SignUpMainContent from '../MainComponents/SignUpMain';

function SignUpPage() {
  let selectedVideo = 'colorHexagonVideo';

  // Hooks
  const params = useParams();

  // Hooks
  const backgroundVideo = () => {
    if (params.role) {
      selectedVideo = 'blueStar';
    }
    return selectedVideo;
  };

  return (
    <div>
      <div id="content-wrap">
        <NavigationBar loginBtn homeBtn />
        <BackgroundVideo video={backgroundVideo()} />
        <Header />
        <NewAudioPlayer video="donDiablo" tracks={tracks} />
        <SignUpMainContent />
        <FooterHexagon />
      </div>
    </div>
  );
}

export default SignUpPage;
