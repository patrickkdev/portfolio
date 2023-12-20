/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { WhatsApp } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import Navbar from '../navbar/navbar';
import SkilLDisplay from './skill-display';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <div className="hero">
          <h1>
            Patrick Ferreira
          </h1>
          <h3>
            Desenvolvedor full stack de Nova Lima, MG. 📍
          </h3>
          <Button
            variant='contained'
            // className="gradient-background"
            sx={{backgroundColor: "var(--dark-background)"}}
            href="https://api.whatsapp.com/send?phone=5531971114423&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho."
            target="_blank"
            rel="noreferrer"
            endIcon={<WhatsApp />}
          >
            Contato
          </Button>
        </div>
        <SkilLDisplay />
      </div>
    </div>
  )
}

export default Header