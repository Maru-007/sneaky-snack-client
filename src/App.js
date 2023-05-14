import React, { useEffect, useState } from "react";
import { socket } from "./socket";
import { EVENT_NAMES } from "./utils";
import "./App.scss";
import bannerImage from "./Banner.png";
import loadingSpinner from "./assets/rainbow-spinner-loading.gif";
import Room from "./Room";
// import Typewriter from "typewriter-effect";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import PlaySound from "./Sound";
import TypingComponent from "./Typewriter";

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
  const [isConnected, setIsConnected] = useState(false); // make for each player?
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);
  const [message, setMessage] = useState("");
  const [viewBanner, setViewBanner] = useState(true);
  const [currentRoom, setCurrentRoom] = useState("kidsroom");
  const [displayRoom, setDisplayRoom] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [doorSound, setDoorSound] = useState(false);
  const [isStartButtonClicked, setIsStartButtonClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  // const [player, setPlayer] = useState("Melis");

  useEffect(() => {
    function handleConnect() {
      setIsConnected(true);
      console.log("handleConnect has been triggered");
      setQuestion("");
      setChoices([]);
    }

    function handleDisconnect() {
      setIsConnected(false);
      console.log("handleDisconnect has been triggered");
      setQuestion("");
      setChoices([]);
    }

    // these are our listeners
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    socket.on(EVENT_NAMES.promptsGenerated, handleLoading);

    socket.on("response", (payload) => console.log(payload));
    socket.on(EVENT_NAMES.questionsReady, (question) => {
      setQuestion(question);
      setChoices(question.choices);
      console.log(question);
      console.log(question.choices);
    });

    socket.on(EVENT_NAMES.message, (message) => {
      console.log(message);
      setMessage(message);
    });
    // clean up the socket listeners
    return () => {
      // turns off socket listeners
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("response", () => console.log("response listener is off"));
    };
  }, []);

  const handleLoading = () => {
    setLoading(false);
  };

  const handleReady = (player) => {
    if (player === "Melis") {
      socket.emit(EVENT_NAMES.childReady);
    } else if (player === "Diego") {
      socket.emit(EVENT_NAMES.dogReady);
    }

    setIsPlaying(true);
    setIsStartButtonClicked(true);
  };

  const handleChoice = (choice) => {
    setMessage("");
    console.log(choice);
    socket.emit(EVENT_NAMES.selection, choice);
    setViewBanner(false);
    setDisplayRoom(true);

    if (rooms.includes(choice)) {
      setCurrentRoom(choice);
      setDoorSound(true);
    } else {
      setDoorSound(false);
    }
    console.log(currentRoom);
  };

  const handleNav = (room) => {
    socket.emit(EVENT_NAMES.selection, room);
    setCurrentRoom(room);
    setDoorSound(true);
    console.log(room);
  };

  return (
    <div>
      <p>{isConnected ? "connected" : "not connected"}</p>
      {isConnected && (
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {!isPlaying ? "play music" : "stop music"}
        </button>
      )}
      <br></br>

      <PlaySound isPlaying={isPlaying} doorSound={doorSound} />

      {viewBanner && (
        <>
          <div className="banner">
            <img src={bannerImage} alt="banner" />
          </div>

          {isConnected && (
            <div className="Lobby">
              <button
                onClick={() => {
                  handleReady("Melis");
                }}
              >
                Play as Melis
              </button>
              <button
                onClick={() => {
                  handleReady("Diego");
                }}
              >
                Play as Diego
              </button>
            </div>
          )}
          <br></br>

          {!isStartButtonClicked && (
            <div className="startbtn">
              <button className="choiceButton" onClick={handleReady}>
                Start
              </button>
            </div>
          )}
        </>
      )}
      <div>
        {displayRoom ? (
          <Room
            currentRoom={currentRoom}
            handleChoice={handleChoice}
            rooms={rooms}
            handleNav={handleNav}
          />
        ) : (
          <div className="Lobby"></div>
        )}

        <br></br>

        {message ? (
          <div className="textboxHolder">
            <Paper className="textbox" elevation={3} align="left">
              {
                // message ?
                <TypingComponent question={message}></TypingComponent>
                // :
                // <></>
              }
            </Paper>
          </div>
        ) : (
          <></>
        )}

        <div className="textboxHolder">
          <Paper className="textbox" elevation={3} align="left">
            {question.message ? (
              <TypingComponent question={question.message}></TypingComponent>
            ) : (
              <></>
            )}
          </Paper>
        </div>
        <br></br>

        {/* loading indicator */}
        {loading === true && isStartButtonClicked === true ? (
          <div className="loading">
            <img className="spinner" src={loadingSpinner} alt="loading" />
            <p>Loading...</p>
          </div>
        ) : (
          <></>
        )}

        <div className="choices">
          {choices &&
            choices.map((choice) => (
              <button
                className="choiceButton"
                key={choice}
                value={choice}
                onClick={(e) => handleChoice(choice)}
              >
                {choice}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
