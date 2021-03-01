import React, { useEffect, useState } from 'react';
import data from '../../fakedata/data.json'
import Card from './Card/Card';
import Player from './Player/Player';
import './Team.css';

const Team = () => {
    const [players,setPlayers]= useState([]);
    useEffect(() => {
        setPlayers(data);
    },[])
    const [card,setCard]=useState([]);

    const handleAddPlayer=(player)=>{
        const newCard=[...card,player];
        setCard(newCard);
    }
    return (
        <div className="Team-container">

            <div className="player-container">
            {
                players.map(player=><Player player={player} handleAddPlayer={handleAddPlayer} key={player.id} ></Player>)
            }
            </div>
            <div className="card-container">

            <Card card={card}></Card>
            </div>

        </div>

    );
};

export default Team;