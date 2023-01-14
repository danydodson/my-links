import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/profile.jpg'

export default function Intro() {
  return (
    <div className='intro-box slide-in-top'>
      <Image className='profile-pic' alt="Milky's profile" src={ProfilePic} width="90"></Image>
      <h3 className='name'> Dany Dodson</h3>
      <h4 className='description text-focus-in'>From freelance illustrator to Project Manager of a web development team in 6 months ✨</h4>
    </div>
  )
}


