import React from 'react'
import './index.css'

function About(props) {

    const { about, resume } = props

    const aboutMe = about.length>0 ?
    about.map(para => <div className='aboutText'>{para}</div>) :
    <></>

    return (
        <>
        <div className='sectionHeadingDiv' id='about'>
            About
        </div>
        <hr className='sectionHeadingHrTag'/>
        <div className='aboutDiv'>
            <div className='aboutTextDiv'>
                {aboutMe}
                <div className='resumeDiv'>
                    <a href={resume} className='resumeLink' target="_blank">
                        Resume
                    </a>
                </div>
            </div>
            <div className='aboutImageDiv'>
                <img
                src={require('../../assets/about-pic.jpeg')}
                className='aboutImage'
                >
                </img>
            </div>
        </div>
        <div></div>
      </>
    )
}

export default About