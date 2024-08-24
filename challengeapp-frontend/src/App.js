import "./App.css";
import ChallengeList from "./components/ChallengeList";
import { useEffect, useState } from "react";
import axios from 'axios';
import AddChallenge from "./components/AddChallenge";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [challenges, setChallenge] = useState([]);

  useEffect(() => {  
    fetchChallenge();
  }, []);

  const fetchChallenge = async () => {
    try {
      const response = await axios.get('http://challenge-app-env.eba-pvmgz2da.us-east-1.elasticbeanstalk.com/challenges');     
      setChallenge(response.data);
    } catch (error) {
      console.error("Error on fetching Challenges :",error);
    }      
  };

  const handleChallengeAdded = () => {
    fetchChallenge();
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Monthly Challenge</h1>

      <AddChallenge onChallengeAdded={handleChallengeAdded}/>

      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
