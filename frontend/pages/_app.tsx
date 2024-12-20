import type { AppProps } from 'next/app';
import Navbar from "../components/Navbar";
import Leaderboard from "../components/Leaderboard"
import TwitchChannel from '@/components/Twitch';
import "./globals.css";
import React, { useState, useRef } from 'react';


const leaderboardData1 = [
  {title:"Race 1"},
  { rank: 1, name: 'Charlie', score: 200 },
  { rank: 2, name: 'David', score: 180 },
  { rank: 3, name: 'Eva', score: 150 },
  { rank: 4, name: 'Frank', score: 130 },
  { rank: 5, name: 'Grace', score: 120 },
];

// Leaderboard 3: Fastest Times
const leaderboardData2 = [
  {title:"Race 2"},
  { rank: 1, name: 'Hannah', score: 5.2 },
  { rank: 2, name: 'Ivy', score: 5.5 },
  { rank: 3, name: 'Jack', score: 5.8 },
  { rank: 4, name: 'Kenny', score: 6.0 },
  { rank: 5, name: 'Liam', score: 6.2 },
];

// Leaderboard 4: Highest Levels Achieved
const leaderboardData3 = [
  {title:"Race 3"},
  { rank: 1, name: 'Mona', score: 50 },
  { rank: 2, name: 'Nina', score: 48 },
  { rank: 3, name: 'Oscar', score: 45 },
  { rank: 4, name: 'Paul', score: 42 },
  { rank: 5, name: 'Quincy', score: 40 },
];

// Leaderboard 5: Most Challenges Completed
const leaderboardData4 = [
  {title:"Race 4"},
  { rank: 1, name: 'Rachel', score: 30 },
  { rank: 2, name: 'Steve', score: 28 },
  { rank: 3, name: 'Tina', score: 25 },
  { rank: 4, name: 'Uma', score: 22 },
  { rank: 5, name: 'Victor', score: 20 },
];

// Leaderboard 6: Most Valuable Players
const leaderboardData5 = [
  {title:"Race 5"},
  { rank: 1, name: 'Wendy', score: 1000 },
  { rank: 2, name: 'Xander', score: 950 },
  { rank: 3, name: 'Yara', score: 900 },
  { rank: 4, name: 'Zane', score: 850 },
  { rank: 5, name: 'Alice', score: 800 },
];

// Leaderboard 7: Most Improved Players
const leaderboardData6 = [
  {title:"Race 6"},
  { rank: 1, name: 'Bob', score: 200 },
  { rank: 2, name: 'Charlie', score: 180 },
  { rank: 3, name: 'David', score: 150 },
  { rank: 4, name: 'Eva', score: 130 },
  { rank: 5, name: 'Frank', score: 120 },
];

const leaderboardArray = []

leaderboardArray.push(
  { title: 'Top Scorers', data: leaderboardData1 },
  { title: 'Most Active Users', data: leaderboardData2 },
  { title: 'Fastest Times', data: leaderboardData3 },
  { title: 'Highest Levels Achieved', data: leaderboardData4 },
  { title: 'Most Challenges Completed', data: leaderboardData5 },
  { title: 'Most Valuable Players', data: leaderboardData6 }
);


const MyApp = ({ Component, pageProps }: AppProps) => {

  //Functions and variables for website
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.clientX - startX;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - x;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };




  //HTML displayed below
  return (
    <>
      <Navbar />
      <div
      className="overflow-x-auto max-w-full overflow-x-hidden"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // to stop dragging if mouse leaves container
    >
        <div className="flex space-x-8 text-white">
          <Leaderboard data={leaderboardData1} />
          <Leaderboard data={leaderboardData2} />
          <Leaderboard data={leaderboardData3} />
          <Leaderboard data={leaderboardData4} />
          <Leaderboard data={leaderboardData5} />
          <Leaderboard data={leaderboardData6} />
        </div>
      </div>
      <TwitchChannel channelName="JasperCup"></TwitchChannel>

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