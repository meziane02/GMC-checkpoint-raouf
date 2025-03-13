import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", textAlign: "center" }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default Props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: "N/A",
  age: "N/A",
  image: "https://via.placeholder.com/150",
};

export default Player;
