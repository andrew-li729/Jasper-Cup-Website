// pages/results.tsx
import React, { useState, useEffect } from 'react';

interface RaceResult {
  driverName: string;
  bestLapTime: string;
  date: string;
  track: string;
  car: string;
}

const Results = () => {
  const [raceResults, setRaceResults] = useState<RaceResult[]>([]);

  useEffect(() => {
    // Simulating data fetching. Replace with your API endpoint.
    const fetchResults = async () => {
      // Example: Replace this with a fetch call to your API.
      const mockData: RaceResult[] = [
        {
          driverName: 'Miles Hilado',
          bestLapTime: '1:23.456',
          date: '2024-12-01',
          track: 'Jasper Speedway',
          car: 'Honda Civic Type R',
        },
        {
          driverName: 'Ana Huerta',
          bestLapTime: '1:25.789',
          date: '2024-12-01',
          track: 'Jasper Speedway',
          car: 'Mazda MX-5',
        },
        {
          driverName: 'Andrew Li',
          bestLapTime: '1:27.123',
          date: '2024-12-01',
          track: 'Jasper Speedway',
          car: 'Toyota Supra',
        }
      ];
      setRaceResults(mockData);
    };

    fetchResults();
  }, []);

  return (
    <div className ="w-full flex justify-center">
    <div className="align-center w-full p-7 max-w-7xl min-h-screen flex flex-col p-4">
      <h1 className="text-3xl font-bold text-pink-300">Race Results</h1>
      <table className="mt-4 border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-black">Driver Name</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Best Lap Time</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Date</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Track</th>
            <th className="border border-gray-300 px-4 py-2 text-black">Car</th>
          </tr>
        </thead>
        <tbody>
          {raceResults.map((result, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-black">{result.driverName}</td>
              <td className="border border-gray-300 px-4 py-2 text-black">{result.bestLapTime}</td>
              <td className="border border-gray-300 px-4 py-2 text-black">{result.date}</td>
              <td className="border border-gray-300 px-4 py-2 text-black">{result.track}</td>
              <td className="border border-gray-300 px-4 py-2 text-black">{result.car}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Results;