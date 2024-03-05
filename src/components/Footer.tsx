import React from 'react'
import Logo from './Logo'
import footerImg from "../assets/images/bg-pattern-footer-desktop.svg"
import facebook from "../assets/images/icon-facebook.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg";
import insta from "../assets/images/icon-instagram.svg"
import FooterCard from './FooterCard'

const Footer: React.FC = () => {
  const socialIcons = [
    facebook,
    twitter,
    pinterest,
    insta
  ]

  const ourCompany = [
    'how we work',
    'why insure?',
    'view plans',
    'reviews'
  ]

  const helpMe = [
    "faq",
    "terms of use",
    "privacy policy",
    "cookies"
  ]

  const contact = [
    'sales',
    'support',
    'live chat'
  ]

  const others = [
    'careers',
    'press',
    'licenses'
  ]

  return (
    <footer className="relative bg-natural-very-light-gray">
      <div className="container mx-auto px-3 py-10">
        <img className="absolute top-0 left-0" src={footerImg} alt="" />
        <div className="flex flex-col gap-5 sm:flex-row justify-between items-center border-b pb-8 mb-10 static z-40">
          <Logo />
          <ul className="flex flex-row gap-5 static z-50">
            {socialIcons.map((icon, index) => (
              <li
                className=" opacity-50 hover:opacity-100 cursor-pointer"
                key={index}
              >
                <img src={icon} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap flow-row gap-10 justify-center items-center text-center sm:justify-between sm:items-start sm:text-left">
          <FooterCard heading="our company" links={ourCompany} />
          <FooterCard heading="help me" links={helpMe} />
          <FooterCard heading="contact" links={contact} />
          <FooterCard heading="others" links={others} />
        </div>
      </div>
    </footer>
  );
}

export default Footer