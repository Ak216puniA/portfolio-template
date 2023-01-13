import React from 'react'
import './index.css'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

function Contact(props) {

    const { contacts } = props

    return (
        <>
            <div className='sectionHeadingDiv' id='contact'>
                Let's talk
            </div>
            <hr className='sectionHeadingHrTag'/>
            <div className='contactDiv'>
                <div className='contactDescDiv'>
                    {contacts['contactDesc']}
                </div>
                <div className='contactLinksDiv'>
                    <div className='contactLink'>
                        <a href={contacts['facebook']} target="_blank">
                            <FaFacebook size={32} className='link facebookLink'/>
                        </a>
                    </div>
                    <div className='contactLink'>
                        <a href={contacts['linkedin']} target="_blank">
                            <FaLinkedin size={32} className='link linkedinLink'/>
                        </a>
                    </div>
                    <div className='contactLink'>
                        <a href={contacts['github']} target="_blank">
                            <FaGithub size={32} className='link githubLink'/>
                        </a>
                    </div>
                    <div className='contactLink'>
                        <a href={contacts['email']} target="_blank">
                            <GrMail size={32} className='link emailLink'/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact