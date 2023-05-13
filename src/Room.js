import React from "react";

const roomInfo = {
  kidsroom: {
    areas: [
      {
        alt: "bathroom",
        title: "bathroom",
        coords: "445,147,621,354",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        coords: "801,147,976,353",
        shape: "rect",
      },
    ],
  },
  parentsroom: {
    areas: [
      {
        title: "bathroom",
        alt: "bathroom",
        coords: "403,134,564,322",
        shape: "rect",
      },
      {
        title: "hallway",
        alt: "hallway",
        coords: "727,134,886,321",
        shape: "rect",
      },
    ],
  },
  kitchen: {
    areas: [
      {
        alt: "livingroom",
        title: "livingroom",
        coords: "1,131,135,322",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        coords: "832,133,968,321",
        shape: "rect",
      },
    ],
  },
  livingroom: {
    areas: [
      {
        alt: "kitchen",
        title: "kitchen",
        coords: "834,141,966,322",
        shape: "rect",
      },
      {
        alt: "hallway",
        title: "hallway",
        coords: "3,142,133,322",
        shape: "rect",
      },
    ],
  },
  hallway: {
    areas: [
      {
        title: "kitchen",
        alt: "kitchen",
        coords: "74,96,145,218",
        shape: "rect",
      },
      {
        title: "livingroom",
        alt: "livingroom",
        coords: "220,96,294,218",
        shape: "rect",
      },
      {
        title: "parentsroom",
        alt: "parentsroom",
        coords: "367,96,439,218",
        shape: "rect",
      },
      {
        title: "bathroom",
        alt: "bathroom",
        coords: "588,97,661,219",
        shape: "rect",
      },
      {
        title: "kidsroom",
        alt: "kidsroom",
        coords: "734,96,807,218",
        shape: "rect",
      },
      {
        title: "garage",
        alt: "garage",
        coords: "882,96,955,220",
        shape: "rect",
      },
    ],
  },
  garage: {
    areas: [
      {
        title: "hallway",
        alt: "hallway",
        coords: "660,127,806,293",
        shape: "rect",
      },
    ],
  },
  bathroom: {
    areas: [
      {
        title: "parentsroom",
        alt: "parentsroom",
        coords: "500,140,680,320",
        shape: "rect",
      },
      {
        title: "kidsroom",
        alt: "kidsroom",
        coords: "820,140,1142,320",
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

// KIDS ROOM
{
  /* <img src="kidsroom.png" alt="kidsroom" usemap="#image-map" />

<map name="image-map">
    <area target="" alt="bathroom" title="bathroom" coords="445,147,621,354" shape="rect" onClick={(e) => handleNav(e.target.title)}/>
    <area target="" alt="hallway" title="hallway" coords="801,147,976,353" shape="rect" onClick={(e) => handleNav(e.target.title)}/>
</map>  */
}

// KITCHEN
{
  /* <img src="kitchen.png" usemap="#image-map">

<map name="image-map">
    <area target="" alt="livingroom" title="livingroom" href="" coords="1,131,135,322" shape="rect">
    <area target="" alt="hallway" title="hallway" href="" coords="832,133,968,321" shape="rect">
</map> */
}

{
  /* <img src="hallway.png" usemap="#image-map">


// HALLWAY
<map name="image-map">
    <area target="" alt="kitchen" title="kitchen" href="" coords="74,96,145,218" shape="rect">
    <area target="" alt="livingroom" title="livingroom" href="" coords="220,96,294,218" shape="rect">
    <area target="" alt="parentsroom" title="parentsroom" href="" coords="367,96,439,218" shape="rect">
    <area target="" alt="bathroom" title="bathroom" href="" coords="588,97,661,219" shape="rect">
    <area target="" alt="kidsroom" title="kidsroom" href="" coords="734,96,807,218" shape="rect">
    <area target="" alt="garage" title="garage" href="" coords="882,96,955,220" shape="rect">
</map> */
}

// GARAGE
{
  /* <img src="garage.png" usemap="#image-map">

<map name="image-map">
    <area target="" alt="hallway" title="hallway" href="" coords="660,127,806,293" shape="rect">
</map> */
}

// BATHROOM
{
  /* <img src="bathroom.png" usemap="#image-map">

<map name="image-map">
    <area target="" alt="parentsroom" title="parentsroom" href="" coords="509,140,670,322" shape="rect">
    <area target="" alt="kidsroom" title="kidsroom" href="" coords="832,141,964,323" shape="rect">
</map> */
}

// LIVING ROOM
{
  /* <img src="livingroom.png" usemap="#image-map">

<map name="image-map">
    <area target="" alt="kitchen" title="kitchen" href="" coords="3,142,133,322" shape="rect">
    <area target="" alt="hallway" title="hallway" href="" coords="834,141,966,322" shape="rect">
</map> */
}

// PARENTS ROOM
{
  /* <img src="parentsroom.png" usemap="#image-map">

<map name="image-map">
    <area target="" alt="bathroom" title="bathroom" href="" coords="403,134,564,322" shape="rect">
    <area target="" alt="hallway" title="hallway" href="" coords="727,134,886,321" shape="rect">
</map> */
}
