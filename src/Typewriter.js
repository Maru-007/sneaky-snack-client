import Typewriter from 'typewriter-effect';
import { useRef, useEffect } from "react";
const TypingComponent = ({ question }) => {
    const typewriterRef = useRef(null);
  
    useEffect(() => {
      if (question && typewriterRef.current) {
        const typewriter = typewriterRef.current;
        
        typewriter
        .changeDelay(25)
          .deleteAll(.1)
          .typeString(question)
          .start();
      }
    }, [question]);
    return (
      <>
        {question ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriterRef.current = typewriter;
            }}
          />
        ) : (
          question
        )}
      </>
    );
  };
  export default TypingComponent;