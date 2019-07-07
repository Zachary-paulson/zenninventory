import React from "react";
import "./style.css";
// const logoImages = require.context('../assets/images/logos', true);

// const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

function totalEtsyItems(props) {
  return props.reduce((accumulator, prop) => 
    accumulator + prop.etsy_quantity, 0);
}

function totalEbayItems(props) {
  return props.reduce((accumulator, prop) => 
    accumulator + prop.ebay_quantity, 0);
}

function TotalStockItems({ props }) {
  // 
  // let channelLogo = logoImages(`./${props.channel}.png`);
  // console.log(props.name);
  // console.log();

  return (
    <div className="totalProductsCard">
      <h5>Total Number of Items</h5>
      <ul>
        <strong>Total Items: {totalEtsyItems(props)+totalEbayItems(props)}</strong>
        <li>Total # Etsy Items: {totalEtsyItems(props)}</li>
        <li>Total # Ebay Items: {totalEbayItems(props)}</li>
      </ul>
    </div>
  );


    

 
  // );
}

export default TotalStockItems;