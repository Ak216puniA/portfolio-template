import React from 'react'
import './index.css'

function Intro(props) {
    const { fieldOfInterest, currentWorkPlace, quote } = props
  return (
    <>
        <div className='introDiv'>
            <div className='introText'>
                <div className='introNormal rowLeftAlign fieldOfInterest1'>{fieldOfInterest['fieldOfInterest1']}</div>
                <div className='introBold rowRightAlign fieldOfInterest2'>{fieldOfInterest['fieldOfInterest2']}</div>
            </div>
            <div className='introText'>
                <div className='introNormal rowLeftAlign currentWorkPlace1'>{currentWorkPlace['currentWorkPlace1']}</div>
                <div className='introBold rowRightAlign currentWorkPlace2'>{currentWorkPlace['currentWorkPlace2']}</div>
            </div>
        </div>
        <div className='quoteDiv'>
            {quote}
        </div>
    </>
  )
}

export default Intro