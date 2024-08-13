import { useState } from "react";

function Greeting({ name, message }) {
  const [messageState, setMessage] = useState(message);

  const changeMessage = () => {
    setMessage("Bye");
  };

  return (
    <div>
      <h1>{messageState} World!</h1>
      <h1> I'm {name}</h1>

      <button onClick={changeMessage}>Change message</button>
    </div>
  );
}

export default Greeting;
