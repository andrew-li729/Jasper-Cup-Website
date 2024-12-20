// pages/leaderboard.tsx

import { useEffect, useState } from 'react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
}

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    // Simulate fetching leaderboard data (mock JSON for now)
    const mockData: LeaderboardEntry[] = [
      { rank: 1, name: 'Alice', score: 1500 },
      { rank: 2, name: 'Bob', score: 1200 },
      { rank: 3, name: 'Charlie', score: 1000 },
      { rank: 4, name: 'David', score: 950 },
      { rank: 5, name: 'Eva', score: 850 },
    ];

    setLeaderboardData(mockData); // Set mock data to state
  }, []);

  return (
    <div className=" bg-gray-800 bg-opacity-100 p-8 rounded-lg shadow-lg mx-4 my-4 max-w-7xl" >
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Rank</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry) => (
            <tr key={entry.rank} className="border-b">
              <td className="px-4 py-2">{entry.rank}</td>
              <td className="px-4 py-2">{entry.name}</td>
              <td className="px-4 py-2">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
