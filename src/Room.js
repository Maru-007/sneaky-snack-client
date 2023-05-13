import React from "react";

import MelisSprite from "./Melis-sprite.png"

const roomInfo = {
  kidsroom: {
    areas: [
      {
        alt: "bathroom",
        title: "bathroom",
        //Macbook coords
        coords: "390,134,550,350",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        //Macbook coords
        coords: "715,134,870,300",
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
        coords: "395,135,555,350",
        shape: "rect",
      },
      {
        title: "hallway",
        alt: "hallway",
        //Macbook coords
        coords: "710,125,870,300",
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
        coords: "1,130,137,315",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        //Macbook coords
        coords: "815,130,957,315",
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
        coords: "815,130,957,315",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        //Macbook coords
        coords: "1,130,135,315",
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
        coords: "65,85,138,200",
        shape: "rect",
      },
      {
        title: "livingroom",
        alt: "livingroom",
        //Macbook coords
        coords: "203,85,276,200",
        shape: "rect",
      },
      {
        title: "parentsroom",
        alt: "parentsroom",
        //Macbook coords
        coords: "340,85,413,200",
        shape: "rect",
      },
      {
        title: "bathroom",
        alt: "bathroom",
        //Macbook coords
        coords: "540,85,615,200",
        shape: "rect",
      },
      {
        title: "kidsroom",
        alt: "kidsroom",
        //Macbook coords
        coords: "680,85,750,200",
        shape: "rect",
      },
      {
        title: "garage",
        alt: "garage",
        //Macbook coords
        coords: "810,85,880,200",
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
        coords: "710,140,880,310",
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
        coords: "500,140,660,320",
        shape: "rect",
      },
      {
        title: "kidsroom",
        alt: "kidsroom",
        //Macbook coords
        coords: "815,140,950,320",
        shape: "rect",
      },
    ],
  },
};

const Room = ({ currentRoom, handleNav }) => {
  const { areas } = roomInfo[currentRoom];
  const room = `${currentRoom}.png`;

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

