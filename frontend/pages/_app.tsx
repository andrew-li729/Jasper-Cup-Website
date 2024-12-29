import type { AppProps } from 'next/app';
import Navbar from "../components/Navbar";
import Leaderboard from "../components/Leaderboard"
import TwitchChannel from '@/components/Twitch';
import "./globals.css";
import React, { useState, useRef } from 'react';

const raceData1 = [
  { rank: 1, name: 'Andrew', score: 482 },
  { rank: 2, name: 'Jared', score: 390 },
  { rank: 3, name: 'Ben', score: 142 },
  { rank: 4, name: 'Ian', score: 122 },
  { rank: 5, name: 'Andres', score: 109 },
  { rank: 6, name: 'Miles', score: 92 },
  { rank: 7, name: 'Bryan', score: 76 },
];


const MyApp = ({ Component, pageProps }: AppProps) => {

  //Functions and variables for website




  //HTML displayed below
  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full bg-neutral-800 text-white shadow-lg z-50">
        <Navbar />
      </div>

      <div className="min-h-[68px]"></div>

      <TwitchChannel channelName="JasperCup"></TwitchChannel>
      

      

      <div className="shadow-lg flex justify-center space-x-8 text-white w-full">
        <Leaderboard data={raceData1} title="2024 DRIVER STANDINGS" />
      </div>
      
    </>
  );
};

export default MyApp;