import { Howl, Howler } from "howler";
import { useEffect } from "react";

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
import dogwin from "./audioFiles/dogwin.wav";
import lose from "./audioFiles/lose.wav";
import negative from "./audioFiles/negative.mp3";
import stereo from "./audioFiles/stereo.wav";
import slam from "./audioFiles/slam.wav";
import cologne from "./audioFiles/cologne.wav";
import hairdryer from "./audioFiles/hairdryer.wav";
import alarm from "./audioFiles/alarm.wav";
import thermostat from "./audioFiles/thermostat.wav";
import pillow from "./audioFiles/pillow.wav";
import bowl from "./audioFiles/bowl.wav";
import bark from "./audioFiles/bark.wav";
import roomba from "./audioFiles/roomba.wav";
import mouse from "./audioFiles/mouse.wav";
import flowerpot from "./audioFiles/flowerpot.wav";

const PlaySound = ({
  isPlaying,
  doorSound,
  volume,
  item,
  dogItem,
  winState,
  loseState,
  distract,
  dogDistract,
}) => {
  useEffect(() => {
    const sounds = {
      background: new Howl({ src: [background], volume: volume, loop: true }),
      door: new Howl({ src: [door], volume: 0.1 }),
      backpack: new Howl({ src: [backpack], volume: 0.5, pos: 17 }),
      stepstool: new Howl({ src: [stepstool], volume: 0.5 }),
      slipper: new Howl({ src: [slipper], volume: 0.5 }),
      umbrella: new Howl({ src: [umbrella], volume: 0.5 }),
      baseballmitt: new Howl({ src: [baseballmitt], volume: 0.5 }),
      remote: new Howl({ src: [remote], volume: 0.5 }),
      sock: new Howl({ src: [sock], volume: 0.35 }),
      toiletpaper: new Howl({ src: [toiletpaper], volume: 0.5 }),
      squeakytoy: new Howl({ src: [squeakytoy], volume: 0.5 }),
      shoe: new Howl({ src: [shoe], volume: 0.5 }),
      flashlight: new Howl({ src: [flashlight], volume: 0.5 }),
      tennisball: new Howl({ src: [tennisball], volume: 0.5 }),
      win: new Howl({ src: [win], volume: 0.5 }),
      childwin: new Howl({ src: [childwin], volume: 0.1 }),
      dogwin: new Howl({ src: [dogwin], volume: 0.7 }),
      lose: new Howl({ src: [lose], volume: 0.3 }),
      negative: new Howl({ src: [negative], volume: 0.5 }),
      stereo: new Howl({ src: [stereo], volume: 0.35 }),
      slam: new Howl({ src: [slam], volume: 0.35 }),
      cologne: new Howl({ src: [cologne], volume: 0.5 }),
      hairdryer: new Howl({ src: [hairdryer], volume: 0.9 }),
      alarm: new Howl({ src: [alarm], volume: 0.5 }),
      thermostat: new Howl({ src: [thermostat], volume: 0.5 }),
      pillow: new Howl({ src: [pillow], volume: 0.5 }),
      bowl: new Howl({ src: [bowl], volume: 0.5 }),
      bark: new Howl({ src: [bark], volume: 0.5 }),
      roomba: new Howl({ src: [roomba], volume: 0.5 }),
      mouse: new Howl({ src: [mouse], volume: 0.5 }),
      flowerpot: new Howl({ src: [flowerpot], volume: 0.5 }),
    };

    if (isPlaying === true) sounds.background.play()
    // isPlaying ? sounds.background.play() : sounds.background.stop();
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

    if (distract === "stereo") sounds.stereo.play();
    if (distract === "slam") sounds.slam.play();
    if (distract === "cologne") sounds.cologne.play();
    if (distract === "hairdryer") sounds.hairdryer.play();
    if (distract === "alarm") sounds.alarm.play();
    if (distract === "thermostat") sounds.thermostat.play();
    if (dogDistract === "pillow") sounds.pillow.play();
    if (dogDistract === "bowl") sounds.bowl.play();
    if (dogDistract === "murderers") sounds.bark.play();
    if (dogDistract === "roomba") sounds.roomba.play();
    if (dogDistract === "mouse") sounds.mouse.play();
    if (dogDistract === "flower pot") sounds.flowerpot.play();

    if (winState === true) {
      sounds.win.play();
      sounds.childwin.play();
      sounds.dogwin.play();
    }

    if (loseState === true) {
      sounds.lose.play();
      sounds.negative.play();
    }

    return () => {
      Howler.stop();
    };
  }, [
    volume,
    isPlaying,
    doorSound,
    item,
    dogItem,
    winState,
    loseState,
    distract,
    dogDistract
  ]);
  return <div></div>;
};

export default PlaySound;
