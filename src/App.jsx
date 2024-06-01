import React from 'react'
import ProfileCard from './assets/ProfileCard.jsx';
import './index.css';
const App = () => {
  const imgs = [
    'src/images/alexa.png',
    'src/images/cortana.png',
    'src/images/siri.png'
  ]
  return (
    <div>
      <div>
        <p>Personal Digital Assistnace</p>
        <div style={{display: 'flex', gap:'10px'}}>
          <ProfileCard title='alexa' value='@alexa11' color='card1' img={imgs[0]}/>
          <ProfileCard title='condona' value='@condona12' color='card2' img={imgs[1]}/>
          <ProfileCard title='siri' value='@siri13' color='card3' img={imgs[2]}/>
        </div>
      </div>
    </div>
  )
}

export default App