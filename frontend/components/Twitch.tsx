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
    <div className="twitch-embed-container flex justify-center items-center my-8">
      <iframe
        src={`https://player.twitch.tv/?channel=${channelName}&parent=localhost`}
        frameBorder="0"
        allowFullScreen={true}
        scrolling="no"
        width={width}
        height={height}
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default TwitchChannel;
