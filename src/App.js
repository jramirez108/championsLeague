import './App.css';
import axios from "axios";
import {useEffect, useState} from 'react';
import Match from './components/match'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './components/Loading'


function App() {
  const [isLoading, setLoading] = useState(true);
  const [matches, setMatches] = useState();

useEffect(() => {
  const options = {
    method: 'GET',
    url: 'https://api.football-data.org/v2/competitions/CL/matches',
    headers: {
      'x-Auth-Token': '82cf889da3eb489d82037f5665536e12',
    }
  };

  axios.request(options).then(function (response) {
    setMatches(response.data.matches);
    setLoading(false);
    AOS.init()
  }).catch(function (error) {
    console.error(error);
  });
  
}, []);

if (isLoading) {
  return <div className="App"><Navbar /><Loading /></div>
}

  return (
    <div className="App">
    <Navbar />
    <div className="container-main">
      {
        matches.map(match => 
        <div key={match.id} data-aos="fade-up" data-aos-duration="1000">
        <Match
        homeTeam={match.homeTeam}
        awayTeam={match.awayTeam}
        homeScore={match.score.fullTime.homeTeam}
        awayScore={match.score.fullTime.awayTeam}
        group={match.group}
        stage={match.stage}
        date={match.utcDate}
        />
        </div>)
      }
    </div>
    </div>
  );
}

export default App;
