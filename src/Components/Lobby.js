import React from "react";
import { socket } from "../socket";
import { EVENT_NAMES } from "../utils";
import "./Lobby.scss";

const Lobby = ({
  socketConnection,
  selectedPlayers,
  onPlayersChange,
  setSocketConnection,
}) => {
  const handleSelect = (playerType) => {
    if (!selectedPlayers.includes(playerType)) {
      onPlayersChange([...selectedPlayers, playerType]);
    } else {
      onPlayersChange(
        selectedPlayers.filter((player) => player !== playerType)
      );
    }
  };

  const isPlayerSelected = (playerType) => {
    return selectedPlayers.includes(playerType);
  };
  const handleChildReady = (player) => {
    socket.emit(EVENT_NAMES.childReady);
    setSocketConnection([...socketConnection, [socket, player]]);
  };
  const handleDogReady = (player) => {
    socket.emit(EVENT_NAMES.dogReady);
    setSocketConnection([...socketConnection, [socket, player]]);
  };
  // const handleStart = (socket) => {
  //   socket.emit(EVENT_NAMES.startGame);
  // };
  return (
    <div className="lobby">
      <h2>Lobby</h2>
      <div className = "player-selection">
        <button
          onClick={() => {
            handleSelect("child");
            handleChildReady("Melis");
          }}
          className={isPlayerSelected("child") ? "selected" : ""}
        >
          Melis
        </button>
        <button
          onClick={() => {
            handleSelect("dog");
            handleDogReady("Diego");
          }}
          className={isPlayerSelected("dog") ? "selected" : ""}
        >
          Diego
        </button>
      </div>
      {/* <div className="start-game">
        <button
          disabled={selectedPlayers.length === 0}
          onClick={() => handleStart(socket)}
        >
          Start Game
        </button>
      </div> */}
    </div>
  );
};

export default Lobby;
