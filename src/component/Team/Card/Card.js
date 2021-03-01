import React from 'react';

const Card = (props) => {
        const card=props.card;
        const total=card.reduce((total,player)=>total+player.Salary ,0);

        let playerName =[]; 
        for(let i=0;i<card.length;i++){
        const player = card[i];
        let Name  =' '+player.Name+'  $('+player.Salary+')' + ' | ';
        playerName.push(Name);
        }
        return (
            <div>
            <h3>Total Added </h3>
            <p>Total Team Member: {card.length} </p>
            <p>Selected Players :{playerName}</p>
            <p>Total Budget:${total}</p>
            </div>
        );
    };
    
    

export default Card;