import React from "react";
import './style.css';
import imageInSrc from './imageInSrc.jpg';
import myVideo from './myVideo.mp4';

function App() {
  let firstName ='Slim';
  let lastName ='Amdouni';

  return (
    <div className="App">

      <div style={{border:'solid 1px black', maxWidth:'100vw', padding:'1% 3%', marginBottom:'3%'}}>
        <h1 className='title red size'>Join our magic class with {firstName} {lastName}</h1>
        <h4 className='weight'> Let's dive with {firstName} into programming website especially JSX</h4>
        <br/>
        <img src={imageInSrc} alt='Submarine Code Logo' style={{height:173}}/>
        <br/>
        <img src="/imageInPublic.jpg" alt='logo' className='App-logo'/>
      </div>
      <video width="320" height="240" controls>
        <source src={myVideo} type="video/mp4"/>
      </video>

    </div>
  )
}

export default App;
