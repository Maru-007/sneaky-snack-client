import React from "react";

import MelisSprite from "./Melis-sprite.png"
import useMediaQuery from '@mui/material/useMediaQuery';

//Size 1: max-width: 2560px
//Size 2: max-width: 1920px

const roomInfo = {
  kidsroom: {
    areas: [
      {
        alt: "bathroom",
        title: "bathroom",
        //Macbook coords
        macCoords: "390,134,550,350",
        coords: "480,134,660,350",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        //Macbook coords
        macCoords: "715,134,870,300",
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
        //Macbook coords
        macCoords: "395,135,555,350",
        coords: "480,134,660,350",
        shape: "rect",
      },
      {
        title: "hallway",
        alt: "hallway",
        //Macbook coords
        macCoords: "710,125,870,300",
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
        //Macbook coords
        macCoords: "1,130,137,315",
        coords: "1,150,150,370",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        //Macbook coords
        macCoords: "815,130,957,315",
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
        //Macbook coords
        macCoords: "815,130,957,315",
        coords: "980,141,1150,370",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        //Macbook coords
        macCoords: "1,130,135,315",
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
        //Macbook coords
        macCoords: "65,85,138,200",
        coords: "75,96,165,240",
        shape: "rect",
      },
      {
        title: "livingroom",
        alt: "livingroom",
        //Macbook coords
        macCoords: "203,85,276,200",
        coords: "240,96,350,240",
        shape: "rect",
      },
      {
        title: "parentsroom",
        alt: "parentsroom",
        //Macbook coords
        macCoords: "340,85,413,200",
        coords: "410,96,500,240",
        shape: "rect",
      },
      {
        title: "bathroom",
        alt: "bathroom",
        //Macbook coords
        macCoords: "540,85,615,200",
        coords: "650,96,740,240",
        shape: "rect",
      },
      {
        title: "kidsroom",
        alt: "kidsroom",
        //Macbook coords
        macCoords: "680,85,750,200",
        coords: "810,96,900,240",
        shape: "rect",
      },
      {
        title: "garage",
        alt: "garage",
        //Macbook coords
        macCoords: "810,85,880,200",
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
        //Macbook coords
        macCoords: "710,140,880,310",
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
        //Macbook coords
        macCoords: "500,140,660,320",
        coords: "610,140,800,370",
        shape: "rect",
      },
      {
        title: "kidsroom",
        alt: "kidsroom",
        //Macbook coords
        macCoords: "815,140,950,320",
        coords: "1000,140,1142,370",
        shape: "rect",
      },
    ],
  },
};



const Room = ({ currentRoom, handleNav }) => {
  const { areas } = roomInfo[currentRoom];
  const room = `${currentRoom}.png`;

const isMacScreen = useMediaQuery("(min-width: 2560px)");

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

      <map name="image-map">
        {areas.map((area) => (
          <area
            key={area.title}
            alt={area.alt}
            title={area.title}
            coords={isMacScreen ? area.macCoords : area.coords }
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

