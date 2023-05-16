import React, { useEffect, useState } from "react";
import { EVENT_NAMES } from "../../utils";
import bannerImage from "../../Banner.png";
import Room from "../../Room";
import Paper from "@mui/material/Paper";
import TypingComponent from "../../Typewriter";
const PlayerTwo = ({rooms, viewBanner, setDoorSound, setViewBanner, handleLoading, socket}) => {
    const [dogIsConnected, setDogIsConnected] = useState(false);
    const [dogQuestion, setDogQuestion] = useState("");
    const [dogChoices, setDogChoices] = useState([]);
    const [dogMessage, setDogMessage] = useState("");
    const [dogCurrentRoom, setDogCurrentRoom] = useState("kidsroom");
    
    const [displayRoom, setDisplayRoom] = useState(false);
    useEffect(() => {
        socket.on("dogConnect", handleDogConnect);
        socket.on("dogDisconnect", handleDogDisconnect);
        
        socket.on(EVENT_NAMES.dogQuestions, (question) => {
            setDogQuestion(question);
            setDogChoices(question.choices);
            console.log(dogQuestion);
            console.log(dogChoices);
        });
        socket.on(EVENT_NAMES.dogMessage, (message) => {
            setDogMessage(message);
            console.log(dogMessage)
        });
        return () => {
            socket.off("dogConnect", handleDogConnect);
            socket.off("dogDisconnect", handleDogDisconnect);
            socket.off("response", () => console.log("response listener is off"));
          };
    }, []);
    function handleDogConnect() {
        setDogIsConnected(true);
    }
    
    function handleDogDisconnect() {
        setDogIsConnected(false);
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
        console.log(dogCurrentRoom);
    };
    const handleDogNav = (room) => {
        socket.emit(EVENT_NAMES.dogSelection, room);
        setDogCurrentRoom(room);
        console.log(room);
    };
    return (
        <div>
        <p>{dogIsConnected ? "connected" : "not connected"}</p>
        
    
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
    
            {dogMessage ? (
              <div className="textboxHolder">
                <Paper className="textbox" elevation={3} align="left">
                  <TypingComponent question={dogMessage}></TypingComponent>
                </Paper>
              </div>
            ) : (
              <></>
            )}
    
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
    
}

export default PlayerTwo