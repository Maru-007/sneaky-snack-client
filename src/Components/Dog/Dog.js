import React, { useEffect, useState } from "react";
import { EVENT_NAMES } from "../../utils";
import bannerImage from "../../Banner.png";
import Room from "../../Room";
import Paper from "@mui/material/Paper";
import PlaySound from "../../Sound/index";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TypingComponent from "../../Typewriter";
const PlayerTwo = ({
  rooms,
  viewBanner,
  setViewBanner,
  handleLoading,
  socket,
}) => {
  // const [dogIsConnected, setDogIsConnected] = useState(false);
  const [dogQuestion, setDogQuestion] = useState("");
  const [dogChoices, setDogChoices] = useState([]);
  const [dogMessage, setDogMessage] = useState("");
  const [dogCurrentRoom, setDogCurrentRoom] = useState("kidsroom");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [doorSound, setDoorSound] = useState(false);
  const [dogItem, setDogItem] = useState("");
  const [displayRoom, setDisplayRoom] = useState(false);
  const [winState, setWinState] = useState(false);
  const [loseState, setLoseState] = useState(false);
  const [dogDistract, setDogDistraction] = useState("");

  useEffect(() => {
    socket.on("dogConnect", handleDogConnect);
    socket.on("dogDisconnect", handleDogDisconnect);

    socket.on(EVENT_NAMES.dogQuestions, (question) => {
      setDogQuestion(question);
      setDogChoices(question.choices);
      console.log(dogQuestion);
      console.log(dogChoices);
      if (question.message.includes("You win!")) {
        setWinState(true);
        setTimeout(() => {
          setWinState(false);
        }, 3000);
      }
      if (question.message.includes("You lose!")) {
        setLoseState(true);
        setTimeout(() => {
          setLoseState(false);
        }, 3000);
      }
    });
    socket.on(EVENT_NAMES.dogMessage, (message) => {
      setDogMessage(message);
      console.log(dogMessage);
      if (message.includes("sock")) {
        setDogItem("sock");
        setTimeout(() => {
          setDogItem("");
        }, 2000);
      }
      if (message.includes("toilet paper")) {
        setDogItem("toilet paper");
        setTimeout(() => {
          setDogItem("");
        }, 2000);
      }
      if (message.includes("squeaky toy")) {
        setDogItem("squeaky toy");
        setTimeout(() => {
          setDogItem("");
        }, 2000);
      }
      if (message.includes("shoe")) {
        setDogItem("shoe");
        setTimeout(() => {
          setDogItem("");
        }, 2000);
      }
      if (message.includes("flashlight")) {
        setDogItem("flashlight");
        setTimeout(() => {
          setDogItem("");
        }, 2000);
      }
      if (message.includes("tennis ball")) {
        setDogItem("tennis ball");
        setTimeout(() => {
          setDogItem("");
        }, 2000);
      }
      if (message.includes("pillow")) {
        setDogDistraction("pillow");
        setTimeout(() => {
          setDogDistraction("");
        }, 2000);
      }
      if (message.includes("bowl")) {
        setDogDistraction("bowl");
        setTimeout(() => {
          setDogDistraction("");
        }, 2000);
      }
      if (message.includes("murderers")) {
        setDogDistraction("murderers");
        setTimeout(() => {
          setDogDistraction("");
        }, 2000);
      }
      if (message.includes("roomba")) {
        setDogDistraction("roomba");
        setTimeout(() => {
          setDogDistraction("");
        }, 2000);
      }
      if (message.includes("mouse")) {
        setDogDistraction("mouse");
        setTimeout(() => {
          setDogDistraction("");
        }, 2000);
      }
      if (message.includes("flower pot")) {
        setDogDistraction("flower pot");
        setTimeout(() => {
          setDogDistraction("");
        }, 2000);
      }
    });
    return () => {
      socket.off("dogConnect", handleDogConnect);
      socket.off("dogDisconnect", handleDogDisconnect);
      socket.off("response", () => console.log("response listener is off"));
    };
  }, [dogChoices, dogMessage, dogQuestion, socket]);
  function handleDogConnect() {
    // setDogIsConnected(true);
  }

  function handleDogDisconnect() {
    // setDogIsConnected(false);
    setDogQuestion("");
    setDogChoices([]);
  }

  const handleDogChoice = (choice) => {
    setDogMessage("");
    console.log(choice);
    socket.emit(EVENT_NAMES.dogSelection, choice);
    setViewBanner(false);
    setDisplayRoom(true);
    if (rooms.includes(choice)) {
      setDogCurrentRoom(choice);
      setDoorSound(true);
    } else {
      setDoorSound(false);
    }
    if(choice === "Play Again"){
      setDogCurrentRoom("kidsroom");
    } 
    console.log(dogCurrentRoom);
  };
  const handleDogNav = (room) => {
    socket.emit(EVENT_NAMES.dogSelection, room);
    setDogCurrentRoom(room);
    console.log(room);
    setDoorSound(true);
  };

  const handleVolume = (event, volume) => {
    event.preventDefault();
    setVolume(volume);
  };

  return (
    <div>
      {/* <p>{dogIsConnected ? "connected" : "not connected"}</p> */}

      <Box sx={{ width: 150, m: "auto", mt: "-45px"}}>
        <Stack
          spacing={1}
          direction="column"
          sx={{ mb: 1 }}
          alignItems="center"
        >
          <button
            className="choiceButton"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {!isPlaying ? "Play Music" : "Stop Music"}
          </button>
          <Slider
            aria-label="Volume"
            value={volume}
            onChange={handleVolume}
            step={0.1}
            marks
            min={0}
            max={1.0}
            color="secondary"
          />
        </Stack>
      </Box>
      <br></br>

      <PlaySound
        isPlaying={isPlaying}
        doorSound={doorSound}
        volume={volume}
        dogItem={dogItem}
        winState={winState}
        loseState={loseState}
        dogDistract={dogDistract}
      />

      <br></br>

      {viewBanner && (
        <>
          <div className="banner">
            <img src={bannerImage} alt="banner" />
          </div>
          <br></br>
        </>
      )}

      <div>
        {displayRoom ? (
          <Room
            currentRoom={dogCurrentRoom}
            handleChoice={handleDogChoice}
            rooms={rooms}
            handleNav={handleDogNav}
          />
        ) : (
          <div className="Lobby"></div>
        )}

        <br></br>

        {dogMessage ? (
          <div className="textboxHolder">
            <Paper className="textbox" elevation={3} align="left">
              <TypingComponent question={dogMessage}></TypingComponent>
            </Paper>
          </div>
        ) : (
          <></>
        )}

        <br></br>

        <div className="textboxHolder">
          <Paper className="textbox" elevation={3} align="left">
            {dogQuestion.message ? (
              <TypingComponent question={dogQuestion.message}></TypingComponent>
            ) : (
              <></>
            )}
          </Paper>
        </div>
        <br></br>

        <div className="choices">
          {dogChoices &&
            dogChoices.map((choice) => (
              <button
                className="choiceButton"
                key={choice}
                value={choice}
                onClick={(e) => handleDogChoice(choice)}
              >
                {choice}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerTwo;
