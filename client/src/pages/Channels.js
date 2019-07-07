import React, {Component} from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
// import { Link } from "react-router-dom";
import {Col} from "../components/Grid";
// import { List, ListItem } from "../components/List";
import StoreFrontCard from '../components/StoreFrontCard';

class Channels extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }
  static defaultProps = {
    store: [
      {
        name: 'Amazon'
      }, {
        name: 'Ebay'
      }, {
        name: 'Etsy'
      }
    ]
  };

  render() {
    return (<div>
      {/* <Container fluid> */}
      <Nav/>
      <Col size="md-12 sm-12">
        <div className="row">
          <Col size="md-2">
            <NavSide/>
          </Col>
          <Col size="md-10">
            <div className="row">
              <Col size="md-12 sm-12">
                {this.props.store.map((store) => (<StoreFrontCard storeFront={store.name}/>))}
              </Col>
            </div>
          </Col>
        </div>
      </Col>
      {/* </Container > */}
    </div>);
  }
}

export default Channels;
