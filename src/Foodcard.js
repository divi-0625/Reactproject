import React from 'react'
import "./Foodcard.css"

const Foodcard = (props) => {
  return (
    <div>
      <img src={props.img}/>
      <h2>{props.productName}</h2>
    </div>
  );
};

export default Foodcard;