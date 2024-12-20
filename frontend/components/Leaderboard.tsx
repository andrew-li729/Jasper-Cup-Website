interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
}

interface LeaderboardProps {
  data: LeaderboardEntry[];
}

const Leaderboard = ({ data }: LeaderboardProps) => {
  return (
    <div className="bg-gray-800 bg-opacity-100 p-8 rounded-lg shadow-lg mx-4 my-4 max-w-7xl">
      {data.map((entry) => (
            <h1 className="text-2xl font-bold mb-4">{entry.title}</h1>
          ))}
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Rank</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
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
