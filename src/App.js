import React, { useEffect, useState } from "react";
import { socket } from "./socket";
import { EVENT_NAMES } from "./utils";
import "./App.scss";
import bannerImage from "./Banner.png";
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
  const [isConnected, setIsConnected] = useState(false);
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([]);
  const [message, setMessage] = useState("");
  const [viewBanner, setViewBanner] = useState(true);
  const [currentRoom, setCurrentRoom] = useState("kidsroom");
  const [displayRoom, setDisplayRoom] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [doorSound, setDoorSound] = useState(false);
  const [isStartButtonClicked, setIsStartButtonClicked] = useState(false);

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

  const handleReady = () => {
    socket.emit(EVENT_NAMES.childReady);
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
    console.log(room);
  }
  
 
  return (
    <div>
      <p>{isConnected ? "connected" : "not connected"}</p>

      <button onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? "play music" : "stop music"}
      </button>

      <br></br>

      <PlaySound isPlaying={isPlaying} doorSound={doorSound} />

      {viewBanner && (
        <>
          <img src={bannerImage} alt="banner" />
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
        {displayRoom && (
          <Room
            currentRoom={currentRoom}
            handleChoice={handleChoice}
            rooms={rooms}
            handleNav={handleNav}
          />
        )}

        <br></br>

        <div className="textboxHolder">


          <Paper className='textbox'elevation={3} align='left'>
            {
              question.message ? 
              <TypingComponent question={question.message}></TypingComponent>
              :
              <></>

            }

          </Paper>
        </div>
        <br></br>
        <div className="textboxHolder">

          <Paper className='textbox'elevation={3} align='left'>
            {
              message? 
              <TypingComponent question={message}></TypingComponent>
              :
              <></>

            }
            
          
            
          </Paper>
        </div>

        <div className="choices">
          {choices &&
            choices.map((choice) => (
              <button
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
