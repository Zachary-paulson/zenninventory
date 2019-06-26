import React, { Component } from "react";
// import SaveBtn from "../components/SaveBtn";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Summary from "../components/Summary";
// import Wrapper from "../components/Wrapper";
// import NavSide from "../components/NavSide";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Thumbnail from "../components/Thumbnail";
import { Col } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import landingimg1 from '../components/assets/images/landing1.jpg';
import landingimg2 from '../components/assets/images/landing2.png';
// let rescuebots = images('./blades1.png');
// console.log(`${props.image}.png`);

class Landing extends Component {
  state = {
    items: [],
    title: "",
    author: "",
    synopsis: "",
    search: "",
    results: []
  };

  componentDidMount() {
    // this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveItem({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      // <Container fluid>
      <Col size="md-12 sm-12">
        {/* <div className="row"> */}
        {/* <Col size="md-2"> */}
        {/* <NavSide> */}
        {/* </NavSide> */}
        {/* </Col> */}
        {/* <Col size="md-10"> */}
        <Jumbotron>
          <div>The e-Commerce industry is growing rapidly and many small business are expanding their sales opportunities by selling physical goods through popular online selling channels such as Amazon, Etsy, Ebay, and Shopify. The problem arises when you lose sale from one channel due to untimely stock depletion from another channel.
          Our solution is ZENN Inventory, which provides a centralized inventory to streamline operations so you can easily manage your inventory stock. Any change made in one channel will be reflected across in all other channels. Be at one with your storefront channels and sync your inventory with ZENN Inventory.</div>
        </Jumbotron>

        <div className="row">
          <Col size="md-12 sm-12">
            <Summary>
              <button
                // disabled={!this.state.search}
                onClick={this.handleFormSubmit}
              >Login
                  </button>
              <h1>Summary</h1>
              <div>Pie and Bar graphs</div>
            </Summary>

          </Col>
        </div>

        <br></br>
        <div className="landing-img">
          <img src={landingimg1} alt="inventory mess" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
        </div>
        <br></br>
        <br></br>
        <div className="landing-img">
          <img src={landingimg2} alt="inventory solution" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
        </div>

        {/* </Col> */}
        {/* </div> */}
      </Col>
      // </Container >
    );
  }
}

export default Landing;