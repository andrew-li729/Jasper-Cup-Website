import React, { useEffect, useState } from 'react';

import Head from 'next/head'; // Optional: for managing the <head> element
import Link from 'next/link'; // Optional: for navigation

import Leaderboard from "../components/Leaderboard"
import TwitchChannel from '@/components/Twitch';

type RaceData = {
    rank: number;
    name: string;
    score: number;
  };


const IndexPage = () => {
  const [raceData, setRaceData] = useState<RaceData[]>([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const res = await fetch('/api/leaderboard');
        if (res.ok) {
          const data: RaceData[] = await res.json();
          setRaceData(data);
        } else {
          console.error('Failed to fetch leaderboard data');
        }
      } catch (error) {
        console.error('An error occurred while fetching leaderboard data:', error);
      }
    };

    fetchLeaderboardData();
  }, []);

  return (
    <>


    <TwitchChannel channelName="JasperCup"></TwitchChannel>
      

      

      <div className="shadow-lg flex justify-center space-x-8 text-white w-full">
        <Leaderboard data={raceData} title="2024 DRIVER STANDINGS" />
      </div>

    </>
  );
};

export default IndexPage;
