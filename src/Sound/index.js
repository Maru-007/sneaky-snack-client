
import { Howl, Howler } from 'howler';
import { useEffect } from 'react';

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
  loseState,
  distract,
  dogDistract
}) => {
  useEffect(()=> {
    
    const sounds = {
      background: new Howl({ src: [background], volume: volume, loop: true }),
      door: new Howl({ src: [door], volume: .1 }),
      backpack: new Howl({ src: [backpack], volume: .5, pos: 17 }),
      stepstool: new Howl({ src: [stepstool], volume: .5 }),
      slipper: new Howl({ src: [slipper], volume: .5 }),
      umbrella: new Howl({ src: [umbrella], volume: .5 }),
      baseballmitt: new Howl({ src: [baseballmitt], volume: .5 }),
      remote: new Howl({ src: [remote], volume: .5 }),
      sock: new Howl({ src: [sock], volume: .35 }),
      toiletpaper: new Howl({ src: [toiletpaper], volume: .5 }),
      squeakytoy: new Howl({ src: [squeakytoy], volume: .5 }),
      shoe: new Howl({ src: [shoe], volume: .5 }),
      flashlight: new Howl({ src: [flashlight], volume: .5 }),
      tennisball: new Howl({ src: [tennisball], volume: .5 }),
    };
    isPlaying ? sounds.background.play() : sounds.background.stop();
    doorSound ? sounds.door.play() : sounds.door.stop();
    if (item === "backpack") sounds.backpack.play();
    if (item === "stepstool") sounds.stepstool.play();
    if (item === "slipper") sounds.slipper.play();
    if (item === "umbrella") sounds.umbrella.play();
    if (item === "baseball mitt") sounds.baseballmitt.play();
    if (item === "remote") sounds.remote.play();
    if (dogItem === "sock") sounds.sock.play();
    if (dogItem === "toilet paper") sounds.toiletpaper.play();
    if (dogItem === "squeaky toy") sounds.squeakytoy.play();
    if (dogItem === "shoe") sounds.shoe.play();
    if (dogItem === "flashlight") sounds.flashlight.play();
    if (dogItem === "tennis ball") sounds.tennisball.play();








    



    return () => {
      Howler.stop();
    }
  },[volume,isPlaying,doorSound, item, dogItem])
  return (
    <div></div>
   
  );
};

export default PlaySound;
