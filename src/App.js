import React, { useEffect, useState } from "react";
import "./App.scss";
import bannerImage from "./Banner.png";
import loadingSpinner from "./assets/rainbow-spinner-loading.gif";
import PlayerOne from "./Components/Child/Child";
import PlayerTwo from "./Components/Dog/Dog";
import PlaySound from "./Sound";
import Lobby from "./Components/Lobby";
// import Typewriter from "typewriter-effect";
// import VolumeDown from "@mui/icons-material/VolumeDown";
// import VolumeUp from "@mui/icons-material/VolumeUp";
import { socket } from "./socket";
import { EVENT_NAMES } from "./utils";

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
  const [socketConnection, setSocketConnection] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handlePlayersChange = (newSelectedPlayers) => {
    setSelectedPlayers(newSelectedPlayers);
  };
  console.log(socketConnection);

  const handleLoading = () => {
    setLoading(false);
  };

  let playerOne;
  let playerTwo;
  if (socketConnection[0] && socketConnection[0].includes("Melis")) {
    playerOne = socketConnection[0][0];
    console.log(playerOne);
  } else if (socketConnection[1] && socketConnection[1].includes("Melis")) {
    playerOne = socketConnection[1][0];
    console.log(playerOne);
  }
  if (socketConnection[0] && socketConnection[0].includes("Diego")) {
    playerTwo = socketConnection[0][0];
    console.log(playerTwo);
  } else if (socketConnection[1] && socketConnection[1].includes("Diego")) {
    playerTwo = socketConnection[1][0];
    console.log(playerTwo);
  }

  useEffect(() => {
    socket.on(EVENT_NAMES.promptsGenerated, handleLoading);
    socket.on(EVENT_NAMES.startButton, () => setIsStartButtonClicked(true));
  }, []);

  const handleStart = (socket) => {
    socket.emit(EVENT_NAMES.startGame);
  };

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

      {/* {!isStartButtonClicked && selectedPlayers.length > 0 ? (
        <div>
          <button className="startbtn" onClick={() => handleStart(socket)}>
            Start Game
          </button>
        </div>
      ) : (
        <></>
      )} */}
      {isStartButtonClicked === false ? (
        <div>
          <button
            className="startbtn"
            disabled={selectedPlayers.length === 0}
            onClick={() => handleStart(socket)}
          >
            Start Game
          </button>
        </div>
      ) : (
        <></>
      )}
      {viewBanner && (
        <>
          <div className="banner">
            <img src={bannerImage} alt="banner" />
          </div>
          <br></br>
        </>
      )}

      

      {selectedPlayers.includes("child") && playerOne ? (
        <PlayerOne
          socket={playerOne}
          rooms={rooms}
          viewBanner={viewBanner}
          setDoorSound={setDoorSound}
          setViewBanner={setViewBanner}
          handleLoading={handleLoading}
        />
      ) : (
        <></>
      )}

      {selectedPlayers.includes("dog") && playerTwo && loading === false ? (
        <PlayerTwo
          socket={playerTwo}
          rooms={rooms}
          viewBanner={viewBanner}
          setDoorSound={setDoorSound}
          setViewBanner={setViewBanner}
          handleLoading={handleLoading}
        />
      ) : (
        <></>
      )}

      {/* loading indicator */}
      {loading === true && socketConnection.length ? (
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
