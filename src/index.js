import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from '../src/user.json';
import { Profile } from './components/Profile/profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />
);
