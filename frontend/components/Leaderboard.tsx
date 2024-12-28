interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
}

interface LeaderboardProps {
  data: LeaderboardEntry[];
  title:string;
}

const Leaderboard = ({ data, title }: LeaderboardProps) => {
  return (
    <div className="w-full bg-opacity-100 p-7 shadow-lg max-w-7xl">
      <h1 className="text-2xl mb-4 text-pink-300">{title}</h1>
      <table className="bg-neutral-50 w-full table-auto text-black">
        <thead>
          <tr className='border-b'>
            <th className="px-4 py-2 text-left">POS</th>
            <th className="px-4 py-2 text-left">DRIVER</th>
            <th className="px-4 py-2 text-left">PTS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry.rank} className={`odd:bg-gray-100 even:bg-white`}>
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
