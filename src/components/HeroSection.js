import React from 'react';
import video from '../assets/HeroVideo.mp4';
import './HeroSection.css';
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={video} autoPlay loop muted/>
        <h1>ALMANAC</h1>
        <p>Donde están tus jugadores favoritos</p>
        <div className="hero-btns">
            <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize='btn--large'
            >
                Jugadores
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
