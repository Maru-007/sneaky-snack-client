import React, { useState } from "react";

import "./App.scss";

// import loadingSpinner from "./assets/rainbow-spinner-loading.gif"
import PlayerOne from "./Components/Child/Child";
import PlayerTwo from "./Components/Dog/Dog"

import Lobby from "./Components/Lobby"

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
  // const [isStartButtonClicked, setIsStartButtonClicked] = useState(false);
  // const [volume, setVolume] = useState(20);
  // const [loading, setLoading] = useState(true);
  const [socketConnection, setSocketConnection] = useState([])
  // const [player, setPlayer] = useState("Melis");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handlePlayersChange = (newSelectedPlayers) => {
    setSelectedPlayers(newSelectedPlayers);
  };
  console.log(socketConnection)
  const handleLoading = () => {
    // setLoading(false);
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
      
        <>
          
        </>
        { selectedPlayers.includes('child') && playerOne ?
          <PlayerOne 
            socket={playerOne}
            rooms={rooms} 
            viewBanner={viewBanner} 
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
            setViewBanner={setViewBanner}
            handleLoading={handleLoading}
          />
          :
          <></>
        }
      
      
  
      
      {/* loading indicator */}
      {/* {loading === true ? (
        <div className="loading">
          <img className="spinner" src={loadingSpinner} alt="loading" />
          <p>Loading...</p>
        </div>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default App;
