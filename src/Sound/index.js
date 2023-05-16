import Sound from "react-sound";

import background from "./audioFiles/background1.mp3";
import door from "./audioFiles/door.mp3";
import backpack from "./audioFiles/backpack.wav";
import stepstool from "./audioFiles/stepstool.wav"

const PlaySound = ({ isPlaying, doorSound, volume, item }) => {
  return (
    <div>
      <Sound
        url={background}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        volume={volume}
        loop={true}
      />
      <Sound
        url={door}
        volume={volume}
        playStatus={doorSound ? Sound.status.PLAYING : Sound.status.STOPPED}
      />
      {item === "backpack" && (
        <Sound
          url={backpack}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          volume={100}
          playFromPosition={17000}
        />
      )}
      {item === "stepstool" && (
        <Sound
          url={stepstool}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          volume={100}
        />
      )}
    </div>
  );
};

export default PlaySound;
