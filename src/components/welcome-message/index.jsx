import React from 'react'
import './index.css'

function WelcomeMessage(props) {
    const { greeting, nameIntro } = props 
    return (
        <div className='welcomeMessageDiv'>
            <div className='welcomeMessageGreeting'>{greeting}</div>
            <div className='welcomeMessageNameIntro'>{nameIntro}</div>
        </div>
    )
}

export default WelcomeMessage