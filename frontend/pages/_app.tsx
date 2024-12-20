import type { AppProps } from 'next/app';
import Navbar from "../components/Navbar";
import Leaderboard from "../components/Leaderboard"
import TwitchChannel from '@/components/Twitch';
import "./globals.css";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />

      <div className="flex">
      <Leaderboard/>
      <TwitchChannel channelName="JasperCup"></TwitchChannel>
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