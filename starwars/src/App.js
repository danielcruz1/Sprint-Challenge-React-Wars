import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import StarWarsPlayers from './components/StarWarsPlayers';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  `;

const StyledH1 = styled.h1`
  font-size: 100px;
  padding-right: 50px;
  color: #BD0000;
  `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [player, setPlayer] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
    .then(res => {
      setPlayer(res.data.results);
      console.log(res.data.results);
    })
    .catch(error => {
      console.log("DOH!", error);
  });

  },[]);

    return (
      <div className="App">
        <StyledH1 className="Header">React Wars</StyledH1>
        <Div>
          {player.map(char => {
            return <StarWarsPlayers char={char} key={char.name} />
          })}
        </Div>
      </div>
    );
  };


export default App;
