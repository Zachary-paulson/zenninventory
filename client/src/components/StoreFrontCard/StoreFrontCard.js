import React, {Component} from "react";
import "./style.css";

class StoreFrontCard extends Component {
  render() {
    return (
      <div classNameName='continer-fuild'>
        <div className="card StoreFrontCard" >
          <div className="card-body">
            <h5 className="card-title">Ebay Store front</h5>
            <p className="card-text">Connect your Ebay Store Front with Zenn Inventory </p>
            <a href="#" className="btn btn-primary">Connect to <i class="fab fa-ebay"></i></a>
          </div>
        </div>
        <div className="card StoreFrontCard" >
          <div className="card-body">
            <h5 className="card-title">Amazon Store front</h5>
            <p className="card-text">Connect your Amazon Store Front with Zenn Inventory </p>
            <a href="#" className="btn btn-primary">Connect to <i class="fab fa-amazon"></i></a>
          </div>
        </div>
        <div className="card StoreFrontCard" >
          <div className="card-body">
            <h5 className="card-title">Etsy Store front</h5>
            <p className="card-text">Connect your Etsy Store Front with Zenn Inventory </p>
            <a href="#" className="btn btn-primary">Connect to <i class="fab fa-etsy"></i></a>
          </div>
        </div>
      </div>


        );
        }
        }
        export default StoreFrontCard;
