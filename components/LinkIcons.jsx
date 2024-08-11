import React from 'react'
import Link from 'next/link'
import { FaGithubAlt, FaTwitch, FaTwitterSquare, FaTiktok, FaPenSquare, FaEnvelopeOpenText } from 'react-icons/fa'

const gitHub = 'https://github.com/danydodson'
const twitch = 'https://www.twitch.tv/dany_spatula_hands'
const twitter = 'https://twitter.com/dany_spatch'
// const tiktok = 'https://www.tiktok.com/@dinydatsun'
const portfolio = 'https://danydodson.dev/'
const mail = 'mailto:dany@danydodson.dev'

export default function LinkIcons() {
  return (
    <main className='iconbox shadow-pop-br slide-in-top'>
      <Link className='iconbox-link' href={gitHub} target='_blank' rel='noopener noreferrer'><FaGithubAlt /></Link>
      <Link className='iconbox-link' href={twitter} target='_blank' rel='noopener noreferrer'><FaTwitterSquare /></Link>
      {/* <Link className='iconbox-link' href={tiktok} target='_blank' rel='noopener noreferrer'><FaTiktok /></Link> */}
      <Link className='iconbox-link' href={twitch} target='_blank' rel='noopener noreferrer'><FaTwitch /></Link>
      <Link className='iconbox-link' href={portfolio} target='_blank' rel='noopener noreferrer'><FaPenSquare /></Link>
      <Link className='iconbox-link' href={mail} target='_blank' rel='noopener noreferrer'><FaEnvelopeOpenText /></Link>
    </main>
  )
}
