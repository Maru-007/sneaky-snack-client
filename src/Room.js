import React from "react";

import MelisSprite from "./Melis-sprite.png"
import DiegoSprite from "./pixil-frame-0.png"
const roomInfo = {
  kidsroom: {
    areas: [
      {
        alt: "bathroom",
        title: "bathroom",
        coords: "480,134,660,350",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        coords: "870,134,1060,400",
        shape: "rect",
      },
    ],
  },
  parentsroom: {
    areas: [
      {
        title: "bathroom",
        alt: "bathroom",
        coords: "480,134,660,350",
        shape: "rect",
      },
      {
        title: "hallway",
        alt: "hallway",
        coords: "870,134,1060,400",
        shape: "rect",
      },
    ],
  },
  kitchen: {
    areas: [
      {
        alt: "livingroom",
        title: "livingroom",
        coords: "1,150,150,370",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        coords: "980,133,1200,370",
        shape: "rect",
      },
    ],
  },
  livingroom: {
    areas: [
      {
        alt: "kitchen",
        title: "kitchen",
        coords: "980,141,1150,370",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        coords: "3,142,150,370",
        shape: "rect",
      },
    ],
  },
  hallway: {
    areas: [
      {
        title: "kitchen",
        alt: "kitchen",
        coords: "75,96,165,240",
        shape: "rect",
      },
      {
        title: "livingroom",
        alt: "livingroom",
        coords: "240,96,350,240",
        shape: "rect",
      },
      {
        title: "parentsroom",
        alt: "parentsroom",
        coords: "410,96,500,240",
        shape: "rect",
      },
      {
        title: "bathroom",
        alt: "bathroom",
        coords: "650,96,740,240",
        shape: "rect",
      },
      {
        title: "kidsroom",
        alt: "kidsroom",
        coords: "810,96,900,240",
        shape: "rect",
      },
      {
        title: "garage",
        alt: "garage",
        coords: "970,96,1060,240",
        shape: "rect",
      },
    ],
  },
  garage: {
    areas: [
      {
        title: "hallway",
        alt: "hallway",
        coords: "850,160,1050,370",
        shape: "rect",
      },
    ],
  },
  bathroom: {
    areas: [
      {
        title: "parentsroom",
        alt: "parentsroom",
        coords: "610,140,800,370",
        shape: "rect",
      },
      {
        title: "kidsroom",
        alt: "kidsroom",
        coords: "1000,140,1142,370",
        shape: "rect",
      },
    ],
  },
};

const Room = ({ currentRoom, handleNav }) => {
  const { areas } = roomInfo[currentRoom];
  const room = `${currentRoom}.png`;
  console.log(currentRoom)
  return (
    <>
      <div className="roomimages">
        <img
          src={room}
          usemap="#image-map"
          alt={currentRoom}
          className="rooms"
        />

      <img className="sprite" src={MelisSprite} alt="Melis's sprite" />
      <img className="sprite2" src={DiegoSprite} alt="Diego's sprite"/>

      <map name="image-map">
        {areas.map((area) => (
          <area
            key={area.title}
            alt={area.alt}
            title={area.title}
            coords={area.coords}
            shape={area.shape}
            onClick={(e) => handleNav(e.target.title)}
            />
            ))}
        </map>
      </div>
    </>
  );
};

export default Room;

