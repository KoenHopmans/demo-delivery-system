import React, { createContext, useState } from 'react';

export const userContext = createContext();

export default function UserProvider(props) {
  const [currentUser, setCurrentUser] = useState('');
  const [adminUser, setAdminUser] = useState('');
  const [currentDemo, setCurrentDemo] = useState('');
  const [currentBlob, setCurrentBlob] = useState({});
  const [trackName, setTrackName] = useState('');
  const [artist, setArtist] = useState('');
  const [playMusic, setPlayMusic] = useState('');
  const [clicked, setClicked] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [update, toggleUpdate] = useState(false);
  const [demoOptionsBtn, setDemoOptionsBtn] = useState(true);

  return (
    <userContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentDemo,
        setCurrentDemo,
        currentBlob,
        setCurrentBlob,
        setTrackName,
        trackName,
        setPlayMusic,
        playMusic,
        clicked,
        setClicked,
        adminUser,
        setAdminUser,
        update,
        toggleUpdate,
        feedbacks,
        setFeedbacks,
        demoOptionsBtn,
        setDemoOptionsBtn,
        artist,
        setArtist,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
