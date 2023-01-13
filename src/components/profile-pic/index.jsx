import React, { useEffect, useState } from 'react'
import './index.css'

function ProfilePic() {

    const [hoverPic, setHoverPic] = useState(false)
    const squareSize = `18vw`
    const squareSizeHalf = `9vw`
    const diamondSize = `25vw`

    function navigate(id) {
        document.getElementById(id).scrollIntoView()
    }

    useEffect(() => {
        const photoDiv = document.getElementsByClassName('profilePicDiv')[0]
        const photo = document.getElementsByClassName('profilePic')[0]
        const photoText = document.getElementsByClassName('profilePicText')[0]
        if(hoverPic){
            photoDiv.style.bottom = `-${squareSizeHalf}`
            photo.height = squareSize
            photo.width = squareSize
            photoDiv.style.transform = 'rotate(-90deg)'
            photo.style.transform = 'rotate(90deg)'
            photo.style.opacity = '0.5'
            photoText.style.display = 'block'
        }else{
            photoDiv.style.bottom = `-${squareSizeHalf}`
            photo.style.height = diamondSize
            photo.style.width = diamondSize
            photoDiv.style.transform = 'rotate(45deg)'
            photo.style.transform = 'rotate(-45deg)'
            photo.style.opacity = '1'
            photoText.style.display = 'none'
        }
    })

    return (
        <div className='profilePicDiv'>
            <img 
            className='profilePic'
            src={require('../../assets/profile-pic.webp')}
            onMouseEnter={() => setHoverPic(true)}
            onMouseLeave={() => setHoverPic(false)}
            > 
            </img>
            <div 
            className='profilePicText'
            onMouseEnter={() => setHoverPic(true)}
            onMouseLeave={() => setHoverPic(false)}
            onClick={() => navigate('contact')}
            >
                Wanna Talk?
            </div>
        </div>
  )
}

export default ProfilePic