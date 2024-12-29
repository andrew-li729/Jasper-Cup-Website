import React from "react";

interface TwitchChannelProps {
  channelName: string;
  width?: string;
  height?: string;
}

const TwitchChannel: React.FC<TwitchChannelProps> = ({
  channelName,
  width = "100%",
  height = "480px",
}) => {
  return (
    <div className="twitch-embed-container flex flex-col justify-center items-center">
      <div className="px-70 py-6 bg-neutral-800 text-2xl text-center min-h-28 text-pink-300 mx-auto">
        <span className="inline-block w-4 h-4 bg-red-600 rounded-full mr-2"></span>
        TUNE IN EVERY THURSDAY TO CATCH THE ACTION LIVE!
        <br></br>
        
        <a 
        href="https://www.twitch.tv/JasperCup" 
        className="text-pink-300 hover:underline"
        target="_blank" 
        rel="noopener noreferrer"
        >
        WATCH BELOW OR CLICK HERE!
      </a>
      </div>

      <div className="max-w-7xl w-full mx-auto px-7">
      <iframe
        src={`https://player.twitch.tv/?channel=${channelName}&parent=localhost`}
        frameBorder="0"
        allowFullScreen={true}
        scrolling="no"
        width={width}
        height={height}
        className="sm:block hidden shadow-lg"
      ></iframe>
      </div>
    </div>
  );
};

export default TwitchChannel;
