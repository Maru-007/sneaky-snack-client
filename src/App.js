import React, { useState } from "react";

import { EVENT_NAMES } from "./utils";
import "./App.scss";
import bannerImage from "./Banner.png";
import loadingSpinner from "./assets/rainbow-spinner-loading.gif"
import PlayerOne from "./Components/Child/Child";
import PlayerTwo from "./Components/Dog/Dog"


import PlaySound from "./Sound";

import Lobby from "./Components/Lobby"
import { socket } from "./socket";


const rooms = [
  "kidsroom",
  "bathroom",
  "parentsroom",
  "hallway",
  "kitchen",
  "livingroom",
  "garage",
];

const App = () => {
  const [viewBanner, setViewBanner] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [doorSound, setDoorSound] = useState(false);
  const [isStartButtonClicked, setIsStartButtonClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [socketConnection, setSocketConnection] = useState([])
  // const [player, setPlayer] = useState("Melis");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handlePlayersChange = (newSelectedPlayers) => {
    setSelectedPlayers(newSelectedPlayers);
  };
  console.log(socketConnection)
  const handleLoading = () => {
    setLoading(false);
  };
  let playerOne;
  let playerTwo;
  if (socketConnection[0] && socketConnection[0].includes('Melis')) {
    playerOne = socketConnection[0][0]
    console.log(playerOne)
  } else if (socketConnection[1] && socketConnection[1].includes('Melis')) {
    playerOne = socketConnection[1][0]
    console.log(playerOne)
  }
  if (socketConnection[0] && socketConnection[0].includes('Diego')) {
    playerTwo = socketConnection[0][0]
    console.log(playerTwo)
  } else if (socketConnection[1] && socketConnection[1].includes('Diego')) {
    playerTwo = socketConnection[1][0]
    console.log(playerTwo)
  }

  
  

  return (
    <div>

      <Lobby
            socketConnection={socketConnection}
            selectedPlayers={selectedPlayers} 
            onPlayersChange={handlePlayersChange}
            setSocketConnection={setSocketConnection}
      />
      
      
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? "play music" : "stop music"}
      </button>
  
      <br></br>
  
      <PlaySound isPlaying={isPlaying} doorSound={doorSound} />
  
      
        <>
          
  
          {!isStartButtonClicked && (
            <div className="startbtn">
              {/* <button className="choiceButton" onClick={handleReady}>
                Start
              </button> */}
            </div>
          )}
        </>
        { selectedPlayers.includes('child') && playerOne ?
          <PlayerOne 
            socket={playerOne}
            rooms={rooms} 
            viewBanner={viewBanner} 
            setDoorSound={setDoorSound}
            setViewBanner={setViewBanner}
            handleLoading={handleLoading}
          />
          :
          <></>
        }

        { selectedPlayers.includes('dog') && playerTwo ?
          <PlayerTwo 
            socket={playerTwo}
            rooms={rooms} 
            viewBanner={viewBanner} 
            setDoorSound={setDoorSound}
            setViewBanner={setViewBanner}
            handleLoading={handleLoading}
          />
          :
          <></>
        }
      
      
  
      
      {/* loading indicator */}
      {loading === true && isStartButtonClicked === true ? (
        <div className="loading">
          <img className="spinner" src={loadingSpinner} alt="loading" />
          <p>Loading...</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
