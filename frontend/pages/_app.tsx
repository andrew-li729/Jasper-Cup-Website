import type { AppProps } from 'next/app';
import Navbar from "../components/Navbar";
import "./globals.css";
import React, { useState, useRef } from 'react';

import { Lexend } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({ subsets: ['latin'] })




const MyApp = ({ Component, pageProps }: AppProps) => {

  //Functions and variables for website




  //HTML displayed below
  return (
    <>
    <div className={lexend.className}>

      <div className="navbar fixed top-0 left-0 w-full bg-neutral-800 text-white shadow-lg z-50">
        <Navbar />
      </div>

      <div className="min-h-[68px]"></div>

      
      
      <Component {...pageProps} />
    </div>
    </>
  );
};

export default MyApp;