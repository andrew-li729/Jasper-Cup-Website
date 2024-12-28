import type { AppProps } from 'next/app';
import Navbar from "../components/Navbar";
import Leaderboard from "../components/Leaderboard"
import TwitchChannel from '@/components/Twitch';
import "./globals.css";
import React, { useState, useRef } from 'react';


const raceData1 = [
  { rank: 1, name: 'Charlie', score: 200 },
  { rank: 2, name: 'David', score: 180 },
  { rank: 3, name: 'Eva', score: 150 },
  { rank: 4, name: 'Frank', score: 130 },
  { rank: 5, name: 'Grace', score: 120 },
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

      

      <div className="flex justify-center space-x-8 text-white w-full">
        <Leaderboard data={raceData1} title="CURRENT RESULTS:" />
      </div>
      

      <div>
        <h1>Welcome to My Next.js App</h1>
        <p>This is a basic HTML boilerplate rendered with the Navbar.</p>
        <footer>
          <p>Footer content goes here.</p>
        </footer>
      </div>
    </>
  );
};

export default MyApp;