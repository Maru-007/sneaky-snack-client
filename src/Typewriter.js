import Typewriter from 'typewriter-effect';
import { useEffect, useState } from "react";

const TypingComponent = ({ question }) => {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random()); // change key to enforce re-render
  }, [question]);

  return (
    <Typewriter
      key={key}
      options={{ delay: 25 }}
      onInit={(typewriter) => {
        typewriter.typeString(question || '').start();
      }}
    />
  );
};

export default TypingComponent;
