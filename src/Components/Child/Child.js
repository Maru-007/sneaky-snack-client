import React, { useEffect, useState } from "react";

import { EVENT_NAMES } from "../../utils";
import Room from "../../Room";
import Paper from "@mui/material/Paper";
import TypingComponent from "../../Typewriter";
const PlayerOne = ({rooms, setDoorSound, setViewBanner, socket}) => {
    const [isConnected, setIsConnected] = useState(false);
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState([]);
    const [message, setMessage] = useState("");
    const [currentRoom, setCurrentRoom] = useState("kidsroom");
    const [displayRoom, setDisplayRoom] = useState(false);
    console.log(socket)
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
        
        
        return () => {
          socket.off("connect", handleConnect);
          socket.off("disconnect", handleDisconnect);
          socket.off("response", () => console.log("response listener is off"));
        };
    }, []);
    
    
      const handleChildChoice = (choice) => {
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
    
      };
      return (
        <div>
            <p>{isConnected ? "connected" : "not connected"}</p>
            <br></br>
            {/* {viewBanner && (
                <>
                <div className="banner">
                    <img src={bannerImage} alt="banner" />
                </div>
                <br></br>
                </>
            )} */}
            
                <div>
                {displayRoom ? (
                    <Room
                    currentRoom={currentRoom}
                    handleChoice={handleChildChoice}
                    rooms={rooms}
                    handleNav={handleNav}
                    />
                ) : (
                    <div className="Lobby"></div>
                )}
        
                <br></br>
        
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
        
                <div className="choices">
                    {choices &&
                    choices.map((choice) => (
                        <button
                        className="choiceButton"
                        key={choice}
                        value={choice}
                        onClick={(e) => handleChildChoice(choice)}
                        >
                        {choice}
                        </button>
                    ))}
                </div>
                </div>
            
        </div>
      )
}

export default PlayerOne