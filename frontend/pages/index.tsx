import React, { useEffect, useState } from 'react';
import Head from 'next/head'; // Optional: for managing the <head> element
import Link from 'next/link'; // Optional: for navigation

import TwitchChannel from '@/components/Twitch';




const IndexPage = () => {

  const driverData = [
    { id: 1, name: 'Lewis Hamilton', team: 'Mercedes', nation: 'UK' },
    { id: 2, name: 'Max Verstappen', team: 'Red Bull Racing', nation: 'Netherlands' },
    { id: 3, name: 'Charles Leclerc', team: 'Ferrari', nation: 'Monaco' },
    // Add more drivers as needed
  ];

  return (
    <>


    <TwitchChannel channelName="JasperCup"></TwitchChannel>
    

    </>
  );
};

export default IndexPage;
