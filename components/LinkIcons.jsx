import React from 'react'
import Link from 'next/link'
import { FaGithubAlt, FaTwitch, FaTwitterSquare, FaTiktok, FaKiwiBird, FaEnvelopeOpenText } from "react-icons/fa"

const gitHub = "https://github.com/danydodson"
const twitch = "https://www.twitch.tv/danydodson"
const twitter = "https://twitter.com/danydodson"
const tiktok = "https://www.tiktok.com/@danydodson"
const portfolio = "https://danydodson.dev/"
const mail = "mailto:dany@danydodson.dev"

export default function LinkIcons() {
  return (
    <div className='iconbox shadow-pop-br slide-in-top'>
      <div><Link href={gitHub}><FaGithubAlt /></Link></div>
      <div><Link href={twitter}><FaTwitterSquare></FaTwitterSquare></Link></div>
      <div><Link href={tiktok}><FaTiktok /></Link></div>
      <div><Link href={twitch}><FaTwitch /></Link></div>
      <div><Link href={portfolio}><FaKiwiBird /></Link></div>
      <div><Link href={mail}><FaEnvelopeOpenText /></Link></div>
    </div>
  )
}
