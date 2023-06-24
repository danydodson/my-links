import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/profile.png'

export default function Intro() {
  return (
    <header className='intro-box slide-in-top'>
      <Image className='profile-pic' alt="Dany's profile" src={ProfilePic} width='90'></Image>
      <h3 className='name'> Dany Dodson</h3>
      <h4 className='description text-focus-in'>FullStack Web Developer ✨</h4>
    </header>
  )
}


