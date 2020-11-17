import imageInSrc from './imageInSrc.jpg';
import video from "./video.mp4";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">NBIBA Dhouha</h1>
          <br />
          <img src={imageInSrc}  width = "320"/>

          <br />
          <img src="/imageInPublic.jpg" width = "320"/>
          <br />
        </div>
        <video width={320} height={240} controls>
          <source src="{video}" type = "video/mp4"  autoPlay= "true"/>
        </video>
      </div>
    </div>
  );
}

export default App;
