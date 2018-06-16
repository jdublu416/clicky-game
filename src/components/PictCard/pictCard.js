import React from 'react';
import './PictCard.css';



const PictCard = props => (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} id={props.id} clicked={props.clicked}
        onClick={()=> props.handleClickOfImages(props.id)}/>
      </div>
    </div>
  );
  
  export default PictCard;
  