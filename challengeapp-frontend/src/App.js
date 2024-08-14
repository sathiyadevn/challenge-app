import "./App.css";
import ChallengeList from "./components/ChallengeList";
import { useEffect, useState } from "react";
import axios from 'axios';
import AddChallenge from "./components/AddChallenge";

function App() {
  const [challenges, setChallenge] = useState([]);

  useEffect(() => {  
    fetchChallenge();
  }, []);

  const fetchChallenge = async () => {
    try {
      const response = await axios.get('http://localhost:8080/challenges');     
      setChallenge(response.data);
    } catch (error) {
      console.error("Error on fetching Challenges :",error);
    }      
  };

  const HandleChallengeAdded = () => {
    fetchChallenge();
  }

  return (
    <div className="App">
      <h1>Monthly Challenge</h1>

      <AddChallenge onChallengeAdded={HandleChallengeAdded}/>

      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
