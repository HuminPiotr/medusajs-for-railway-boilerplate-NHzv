import "./styles.scss";

import React from 'react'
import Link from 'next/link'

import { CONTACT } from "@constants/contact";

import { FaFacebook } from 'react-icons/fa';

const FacebookButton: React.FC = () => {
  return (
    <Link href={CONTACT.facebook} target='_blank' className="facebook-button">
        <FaFacebook className="facebook-button__icon" size="2em"/>
    </Link>
  )
}

export default FacebookButton