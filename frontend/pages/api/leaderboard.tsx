// pages/api/leaderboard.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type RaceData = {
  rank: number;
  name: string;
  score: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<RaceData[]>) {
  const raceData: RaceData[] = [
    { rank: 1, name: 'Andrew', score: 482 },
    { rank: 2, name: 'Jared', score: 390 },
    { rank: 3, name: 'Ben', score: 142 },
    { rank: 4, name: 'Ian', score: 122 },
    { rank: 5, name: 'Andres', score: 108 },
    { rank: 6, name: 'Miles', score: 92 },
    { rank: 7, name: 'Bryan', score: 76 },
  ];
  res.status(200).json(raceData);
}
