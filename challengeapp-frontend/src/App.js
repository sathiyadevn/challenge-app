import "./App.css";
import ChallengeList from "./components/ChallengeList";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [challenges, setChallenge] = useState([]);

  useEffect(() => {

    const fetchChallenge = async () => {
      
      const response = await axios.get('http://localhost:8080/challenges');
      // console.log(response.data);
      setChallenge(response.data);
    };

    fetchChallenge();
  }, []);

  return (
    <div className="App">
      <h1>Monthly Challenge</h1>

      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
