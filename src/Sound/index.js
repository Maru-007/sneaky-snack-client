import Sound from "react-sound";

import background from "./audioFiles/background1.mp3";
import door from "./audioFiles/door.mp3"

const PlaySound = ({isPlaying, doorSound}) => {
  return (
    <div>
      <Sound
        url={background}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        loop={true}
      />
      <Sound
        url={door}
        playStatus={doorSound ? Sound.status.PLAYING : Sound.status.STOPPED}
      />
    </div>
  );
};

export default PlaySound;
