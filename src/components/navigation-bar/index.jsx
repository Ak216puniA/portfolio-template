import React from 'react'
import './index.css'

function NavigationBar() {

  function navigate(id) {
    document.getElementById(id).scrollIntoView()
  }

  return (
    <div className='navBarDiv'>
        <div className='navBarLinkDiv navBarLinkExplore' onClick={() => navigate('explore')}>Explore</div>
        <div className='navBarLinkDiv navBarLinkAbout' onClick={() => navigate('about')}>About</div>
        <div className='navBarLinkDiv navBarLinkContact' onClick={() => navigate('contact')}>Contact</div>
    </div>
  )
}

export default NavigationBar