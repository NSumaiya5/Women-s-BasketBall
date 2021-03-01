import React from 'react';
import './Player.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt } from '@fortawesome/free-solid-svg-icons'


    const Player = (props) => {
        const {Image, Name, Salary}=props.player;
        return (
    
            <div className="player-container ">
    
                <Card>
                    <div className="player-img">
                        <Card.Img variant="top" src={Image} />
                    </div>
                <div className="player-Details">
                    <Card.Body>
                    <Card.Title>Player Name: {Name}</Card.Title>
                    <Card.Text>
                        <p>Salary: ${Salary}</p>
                    </Card.Text>
                    <Button variant="success"onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faTshirt}></FontAwesomeIcon> Add Player</Button>
                </Card.Body>
                </div>
    
                </Card>
            </div>
    
        );
    };
    

export default Player;