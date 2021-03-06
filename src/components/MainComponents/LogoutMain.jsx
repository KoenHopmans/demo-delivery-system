import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../context/UserProvider';

const LogoutMainContent = () => {
  // Hooks
  const history = useHistory();
  const { setAdminUser } = useContext(userContext);

  // Functions
  const logout = () => {
    history.push('/', { from: 'App' });
    localStorage.removeItem('token');
    setAdminUser('');
  };

  return (
    <div className="mainContentContainer">
      <div className="mainContent">
        <div className="content-box">
          <div className="logout-header">
            <h1>Logout</h1>
          </div>
          <div />
          <div className="question">
            Are you sure you want to log out?
          </div>
          <div className="btn-container">
            <button
              onClick={() => {
                history.goBack();
              }}
              type="button"
              className="btn"
            >
              Cancel
            </button>
            <button
              onClick={logout}
              type="button"
              className="btn"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutMainContent;
