import React from 'react';
import MyInfo from './Components/MyInfo.js'
import SocialLinks from './Components/SocialLinks.js'
import ProjectLinks from './Components/ProjectLinks.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <MyInfo/>
      <SocialLinks/>
      <ProjectLinks/>
    </div>
  );
}

export default App;
