import Sound from "react-sound";

import background from "./audioFiles/background1.mp3";
import door from "./audioFiles/door.mp3";
import backpack from "./audioFiles/backpack.wav";
import stepstool from "./audioFiles/stepstool.wav";
import slipper from "./audioFiles/slipper.wav";
import umbrella from "./audioFiles/umbrella.wav";
import baseballmitt from "./audioFiles/baseballmitt.wav";
import remote from "./audioFiles/remote.wav";
import sock from "./audioFiles/sock.wav";
import toiletpaper from "./audioFiles/toiletpaper.wav";
import squeakytoy from "./audioFiles/squeakytoy.wav";
import shoe from "./audioFiles/shoe.wav";
import flashlight from "./audioFiles/flashlight.wav";
import tennisball from "./audioFiles/tennisball.wav";
import win from "./audioFiles/win.mp3";
import childwin from "./audioFiles/childwin.wav";
import lose from "./audioFiles/lose.wav";
import negative from "./audioFiles/negative.mp3";
import dogwin from "./audioFiles/dogwin.wav";

const PlaySound = ({
  isPlaying,
  doorSound,
  volume,
  item,
  dogItem,
  winState,
  loseState
}) => {
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
          playStatus={Sound.status.PLAYING}
          volume={100}
          playFromPosition={17000}
        />
      )}
      {item === "stepstool" && (
        <Sound url={stepstool} playStatus={Sound.status.PLAYING} volume={35} />
      )}
      {item === "slipper" && (
        <Sound url={slipper} playStatus={Sound.status.PLAYING} volume={35} />
      )}
      {item === "umbrella" && (
        <Sound url={umbrella} playStatus={Sound.status.PLAYING} volume={35} />
      )}
      {item === "baseball mitt" && (
        <Sound
          url={baseballmitt}
          playStatus={Sound.status.PLAYING}
          volume={35}
        />
      )}
      {item === "remote" && (
        <Sound url={remote} playStatus={Sound.status.PLAYING} volume={35} />
      )}
      {dogItem === "sock" && (
        <Sound url={sock} playStatus={Sound.status.PLAYING} volume={35} />
      )}
      {dogItem === "toilet paper" && (
        <Sound
          url={toiletpaper}
          playStatus={Sound.status.PLAYING}
          volume={35}
        />
      )}
      {dogItem === "squeaky toy" && (
        <Sound url={squeakytoy} playStatus={Sound.status.PLAYING} volume={35} />
      )}
      {dogItem === "shoe" && (
        <Sound url={shoe} playStatus={Sound.status.PLAYING} volume={35} />
      )}
      {dogItem === "flashlight" && (
        <Sound url={flashlight} playStatus={Sound.status.PLAYING} volume={35} />
      )}
      {dogItem === "tennis ball" && (
        <Sound url={tennisball} playStatus={Sound.status.PLAYING} volume={35} />
      )}
      {winState && (
        <>
          <Sound url={win} playStatus={Sound.status.PLAYING} volume={35} />
          <Sound url={childwin} playStatus={Sound.status.PLAYING} volume={35} />
          <Sound url={dogwin} playStatus={Sound.status.PLAYING} volume={35} />
        </>
      )}
      {loseState && (
        <>
          <Sound url={lose} playStatus={Sound.status.PLAYING} volume={35} />
          <Sound url={negative} playStatus={Sound.status.PLAYING} volume={35} />
        </>
      )}
    </div>
  );
};

export default PlaySound;
