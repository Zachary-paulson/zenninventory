import React from "react";
import "./style.css";
// import rescuebots from './images/blades2.png';

// const images = require.context('./images', true);

function ProductCard(props) {
  // let rescuebots = images('./blades1.png');
  // let rescuebots = images(`./${props.image}.png`);
  // console.log(props.name);
  // console.log(`${props.image}.png`);

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          {/* <li><strong>{props.title}</strong></li> */}
          <li><a rel="noreferrer noopener" target="_blank" href={props.url}>{props.title}</a></li>
          {/* <li>{props.title}</li> */}
          {/* <li>{props.description}</li> */}
          <li>${props.price}</li>
          <li>Quantity: {props.quantity}</li>
          <li>Listing ID: {props.listing_id}</li>
          <li>SKU: {props.sku}</li>
          <li>Views: {props.views}</li>
          <li>State: {props.state}</li>
          <li>Channel: {props.channel}</li>
        </ul>
      </div>
      
    </div>
  );
}

export default ProductCard;
