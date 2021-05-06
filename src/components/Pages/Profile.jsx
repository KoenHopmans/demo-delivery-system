import React from 'react';

import BackgroundVideo from '../ReusableComponents/BackgroundVideo/BackgroundVideo';
import NavigationBar from '../ReusableComponents/NavigationBar/NavigationBar';
import Header from '../ReusableComponents/Header/Header';
import FooterHexagon from '../ReusableComponents/Footer/FooterHexagon';
import ProfileMain from '../MainContentComponents/ProfileMain';
import tracks from '../TrackLists/TrackListHexagon';
import AudioPlayer from '../ReusableComponents/AudioPlayer/AudioPlayer';

function Profile() {
  return (
    <div>
      <div id="content-wrap">
        <NavigationBar addDemoBtn singOutBtn demosBtn />
        <BackgroundVideo />
        <Header />
        <AudioPlayer video="donDiablo" tracks={tracks} />
        <ProfileMain />
        <FooterHexagon />
      </div>
    </div>
  );
}

export default Profile;