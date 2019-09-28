import React from "react";
import styled from 'styled-components';

const PlayerStyle = styled.div`
width: 30%;	
background-color: black;
margin: 20px;	
color: white;
border: 5px solid #BD0000;
border-radius: 25px;
`;

const PlayerInfo = styled.ul`
list-style-type: none;
padding: 0;
padding-left: 40px;
color: #10DF00;
`;

const InfoH1 = styled.li`
font-size: 1.8rem;
`

function StarWarsPlayers (props) {
    return (
        <PlayerStyle>
            <PlayerInfo>
                <li><InfoH1>{props.char.name}</InfoH1></li>
                <li>Birth Year: {props.char.birth_year}</li>
                <li>Gender: {props.char.gender}</li>
                <li>Height:{props.char.height}</li>
                <li>Mass: {props.char.mass}</li>
                <li>Eye Color: {props.char.eye_color}</li>
                
            </PlayerInfo>
        </PlayerStyle> 
    );
}

export default StarWarsPlayers; 