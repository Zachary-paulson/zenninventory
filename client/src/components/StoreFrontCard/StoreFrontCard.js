import React, {Component} from "react";
import "./style.css";

class StoreFrontCard extends Component {
  render() {
    return (
      <div classNameName='continer-fuild'>
        <div className="card StoreFrontCard" >
          <img className="card-img-top" src="..." alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Ebay Store front</h5>
            <p className="card-text">Connect your Ebay Store Front with Zenn Inventory </p>
            <a href="#" className="btn btn-secondary">Sign in with  <i class="fab fa-ebay"></i></a>
          </div>
        </div>
      </div>


        );
        }
        }
        export default StoreFrontCard;
