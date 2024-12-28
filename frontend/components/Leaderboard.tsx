interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
}

interface LeaderboardProps {
  data: LeaderboardEntry[];
  title:string;
}

const Leaderboard = ({ data,title }: LeaderboardProps) => {
  return (
    <div className="bg-opacity-100 p-8 shadow-lg max-w-7xl">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <table className="bg-white-800  w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Rank</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.rank} className="">
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
