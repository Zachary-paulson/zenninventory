// import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
// import DisplayContainer from "../components/DisplayContainer";
import Nav from "../components/Nav";
import NavSide from "../components/NavSide";
import API from "../utils/API";
import { Col } from "../components/Grid";
// import ProductCard from "../components/ProductCard";
import { FormBtn, ClearBtn } from "../components/Form";
import jsonp from 'jsonp';
import Summary from "../components/Summary";
// import SummaryCard from "../components/SummaryCard";
// import SummaryListCard from "../components/SummaryListCard";
// import SummaryTopCard from "../components/SummaryTopCard";
import './DashboardStyle.css';

// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

function topViewsFirst(items) {
  return items.filter(item => item).sort((a, b) => {
    if (a.views < b.views) {
      return 1;
    } else if (a.views > b.views) {
      return -1;
    } else {
      return 0;
    }
  });
}

function TopViewList({ items }) {
  return (
    <ol> 
      <h5>Top Viewed Products</h5>
      {topViewsFirst(items).map(item => (
        <li key={item.id}>
          {item.name}: {item.views}
        </li>
      ))}
    </ol>
  );
}

function Dashboard() {
// class Dashboard extends Component {
  // state = {
  //   results: []
  // };

  const [results, setResults] = useState('[]');

  // componentDidMount() {
  //   this.loadListings();
  // }
  
  useEffect(() => {
    loadListings();
    // setInterval(() => {
    //   setUsername('MJ');
    //   setFirstname('Mary');
    //   setLastname('Jane');
    // }, 0);
  });


  // loadListings = () => {
  const loadListings = () => {
    API.getListings()
      .then(res =>
        // this.setState({ results: res.data }, console.log(res.data))
        // setResults(res.data, console.log(res.data))
        setResults(res.data)
      )
      .catch(err => console.log(err));
  };

  // handleEtsySearch = event => {
  const handleEtsySearch = event => {
    event.preventDefault();
    let term = "SilverandGoldGallery"; // need to put in env
    let api_key = "xv3l1bj1g4cwg1ihrprejjce"; // need to put in env
    let offsetMultiples = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900]; // saves up to 1000 item listings
    for (let i = 0; i < offsetMultiples.length; i++) {
      jsonp("https://openapi.etsy.com/v2/shops/" + term + "/listings/active.js?callback=getData&limit=100&offset=" + offsetMultiples[i] + "&includes=Images:1&api_key=" + api_key, null, (err, data) => {
        if (err) {
          console.error(err.message);
        }
        else {
          let finalResult = [];
          for (let value of data.results) {
            let callbackResult = {
              image: value.Images[0].url_570xN,
              title: value.title,
              price: value.price,
              etsy_quantity: value.quantity,
              listing_id: value.listing_id,
              sku: value.sku[0],
              views: value.views,
              url: value.url,
              description: value.description,
              state: value.state,
              channel: "Etsy"
            }
            finalResult.push(callbackResult);
          }
          // this.setState({ results: finalResult });
          setResults(finalResult);
          saveEtsyListing(results);
          // this.saveEtsyListing(this.state.results);
        }
      });
    }
  }

  const handleEbaySearch = event => {
    event.preventDefault();
    console.log("Handling Ebay API Call!");
  }

  // saveEtsyListing = results => {
  const saveEtsyListing = results => {
    API.saveListing(results)
      .then(res => {
        console.log("Saved in Mongo!");
      })
      .catch(err => console.log(err));
  };

  // clearDatabase = results => {
  const clearDatabase = results => {
    API.clearListings(results)
      .then(res => {
        console.log("Cleared Mongo!");
      })
      .catch(err => console.log(err));
  };

  let items = [
    { id: 0, name: "Cup", views: 5, isNew: true },
    { id: 1, name: "Piano", views: 500, isNew: true },
    { id: 2, name: "T-Shirt", views: 10, isNew: true },
    { id: 3, name: "Rescue Bots", views: 7, isNew: true }
  ];


  // render() {
    return (

      <div className="container1">
        <Nav>
        </Nav>

        <Col size="md-12 sm-12">
          <div className="row">
            <Col size="md-2">
              <NavSide>
              </NavSide>
            </Col>
            <Col size="md-10">
              <Jumbotron>
                <h2>Summary of Inventory</h2>
              </Jumbotron>

              <div>
                <form style={{ float: 'left', marginRight: "5px" }}>
                  <FormBtn
                    // onClick={this.handleEtsySearch}>
                    onClick={handleEtsySearch}>
                    Manual Etsy API Call
                  </FormBtn>
                </form>
                <form style={{ float: 'left', marginRight: "5px" }}>
                  <FormBtn 
                  // onClick={this.handleEbaySearch}>
                  onClick={handleEbaySearch}>
                    Manual Ebay API Call
                  </FormBtn>
                </form>
                <form>
                  <ClearBtn 
                  // onClick={this.clearDatabase}>
                  onClick={clearDatabase}>
                    Clear Database
                  </ClearBtn>
                </form>
              </div>


              <TopViewList items={items} />

              <Summary>
              
              {/* <h1>My name is {this.state.results[0].title}</h1> */}
              {/* {this.state.results.map(item => {
                      return (
                        <SummaryCard
                        title={item.title}
                        />
                      );
                    }
                    )} */}
              
                
          
                    
                
              <div className="dashboardWrapper">

                <div className="row">
                  <div className="col">
                    1 of 3
                  </div>
                  <div className="col">
                    2 of 3
                  </div>
                  <div className="col">
                    3 of 3
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    1 of 3
                  </div>
                  <div className="col">
                    2 of 3
                  </div>
                  <div className="col">
                    3 of 3
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    1 of 3
                  </div>
                  <div className="col">
                    2 of 3
                  </div>
                  <div className="col">
                    3 of 3
                  </div>
                </div>

              </div>
              </Summary>

              {/* {this.state.results.length ? (
                  <DisplayContainer>
                    {this.state.results.map(item => {
                      return (
                        <ProductCard 
                          image={item.image}
                          title={item.title}
                          price={item.price}
                          quantity={item.quantity}
                          listing_id={item.listing_id}
                          sku={item.sku}
                          key={item.listing_id}
                          views={item.views}
                          url={item.url}
                          description={item.description} 
                          state={item.state}
                          channel={item.channel}/>
                      );
                    }
                    )}
                    </DisplayContainer>
                ) : (
                    <h3>No Results to Display</h3>
                  )} */}
            </Col>
          </div>
        </Col>
      </div>
    );
  }
// }

export default Dashboard;







// import React, { Component } from "react";
// // import SaveBtn from "../components/SaveBtn";
// // import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import DisplayContainer from "../components/DisplayContainer";
// // import Summary from "../components/Summary";
// // import Wrapper from "../components/Wrapper";
// import Nav from "../components/Nav";
// import NavSide from "../components/NavSide";
// import API from "../utils/API";
// // import { Link } from "react-router-dom";
// // import Thumbnail from "../components/Thumbnail";
// import { Col } from "../components/Grid";
// // import { List } from "../components/List";
// import ProductCard from "../components/ProductCard";
// // import { FormBtn } from "../components/Form";
// import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import './InventoryStyle.css';
// import ProficiencyCellRenderer from './ProficiencyCellRenderer.jsx';

// class Dashboard extends Component {
//   state = {
//     results: [],
//     columnDefs: [{
//       headerName: "Title", field: "title"
//     }, {
//       headerName: "Storefront", field: "channel"
//     }, {
//       headerName: "Listing ID", field: "listing_id"
//     }, {
//       headerName: "SKU", field: "sku"
//     }, {
//       headerName: "Views", field: "views"
//     }, {
//       headerName: "Quantity", field: "quantity"
//     }, {
//       headerName: "Price", field: "price"
//     }, {
//       headerName: "URL", field: "url"
//     }],
//     rowData: []
//     // rowData: [{
//     //   make: "Toyota", model: "Celica", price: 35000
//     // }, {
//     //   make: "Ford", model: "Festiva", price: 32000
//     // }, {
//     //   make: "Porsche", model: "Boxster", price: 72000
//     // }]
//   };

//   componentDidMount() {
//     this.loadListings();
//     this.loadTableData();
//     // this.loadGraphs();
//   }

//   loadListings = () => {
//     API.getListings()
//       .then(res =>
//         this.setState({ results: res.data }, console.log(res.data))
//       )
//       .catch(err => console.log(err));
//   };
//   loadTableData = () => {
//     API.getListings()
//       .then(res =>
//         this.setState({ rowData: res.data }, console.log(res.data))
//       )
//       .catch(err => console.log(err));
//   };

//   static itemCellRenderer(params) {
//     if (params.value) {
//         return `<img border='0' width='45' height='30' style='margin-bottom: 2px' src='${params.value}'> `;
//     } else {
//         return null;
//     }
//   }

//   static urlCellRenderer(params) {
//     if (params.value) {
//         return `<a href='${params.value}' target="_blank">${params.value}</a> `;
//     } else {
//         return null;
//     }
//   }


//   // loadGraphs = () => {
//   //   function Chart() {
//   //     this.type= "";
//   //     this.data= "";
//   //   }

//   //   var ctx = document.getElementById('myChart').getContext('2d');
//   //   var myChart = new Chart(ctx, {
//   //     type: 'bar',
//   //     data: {
//   //       labels: ['Amazon', 'Etsy', 'Ebay'],
//   //       datasets: [{
//   //         label: ['monthly sales'],
//   //         data: [12, 19, 3],
//   //         backgroundColor: [
//   //           'rgba(255, 99, 132, 0.2)',
//   //           'rgba(54, 162, 235, 0.2)',
//   //           // 'rgba(255, 206, 86, 0.2)',
//   //           // 'rgba(75, 192, 192, 0.2)',
//   //           // 'rgba(153, 102, 255, 0.2)',
//   //           'rgba(255, 159, 64, 0.2)'
//   //         ],
//   //         borderColor: [
//   //           'rgba(255, 99, 132, 1)',
//   //           'rgba(54, 162, 235, 1)',
//   //           // 'rgba(255, 206, 86, 1)',
//   //           // 'rgba(75, 192, 192, 1)',
//   //           // 'rgba(153, 102, 255, 1)',
//   //           'rgba(255, 159, 64, 1)'
//   //         ],
//   //         borderWidth: 1
//   //       }]
//   //     },
//   //     options: {
//   //       scales:
//   //       {
//   //         yAxes: [{
//   //           ticks: { beginAtZero: true },
//   //           scaleLabel: { display: true, labelString: 'Number of Orders/Month' }
//   //         }],
//   //         xAxes: [{
//   //           ticks: { beginAtZero: true },
//   //           scaleLabel: { display: true, labelString: 'Storefront', fontSize: 12, fontColor: '#666' }
//   //         }]
//   //       },

//   //       legend: { display: false, labels: { fontColor: 'rgb(255, 99, 132)' } },

//   //       // layout: {padding: {left: 50, right: 50, top: 0, bottom: 0}}
//   //     }
//   //   });



//     // var ctx = document.getElementById('myChart2').getContext('2d');
//     // var myPieChart = new Chart(ctx, {
//     //   // type: 'bar',
//     //   type: 'pie',
//     //   data: {
//     //     labels: ['Amazon', 'Etsy', 'Ebay'],
//     //     datasets: [{
//     //       label: ['monthly sales'],
//     //       data: [12, 19, 3],
//     //       backgroundColor: [
//     //         'rgba(255, 99, 132, 0.2)',
//     //         'rgba(54, 162, 235, 0.2)',
//     //         // 'rgba(255, 206, 86, 0.2)',
//     //         // 'rgba(75, 192, 192, 0.2)',
//     //         // 'rgba(153, 102, 255, 0.2)',
//     //         'rgba(255, 159, 64, 0.2)'
//     //       ],
//     //       borderColor: [
//     //         'rgba(255, 99, 132, 1)',
//     //         'rgba(54, 162, 235, 1)',
//     //         // 'rgba(255, 206, 86, 1)',
//     //         // 'rgba(75, 192, 192, 1)',
//     //         // 'rgba(153, 102, 255, 1)',
//     //         'rgba(255, 159, 64, 1)'
//     //       ],
//     //       borderWidth: 1
//     //     }]
//     //   },
//     //   options: {
//     //     // scales:
//     //     // {
//     //     // yAxes: [{ticks: {beginAtZero: true, callback: function(value, index, values) {return '$' + value;}}, 
//     //     //         scaleLabel: {display: true, labelString: 'Y-axis Title'}}],
//     //     // xAxes: [{ticks: {beginAtZero: true}, 
//     //     //         scaleLabel: {display: true, labelString: 'X-axis Title', fontSize: 16, fontColor: 'green'}}]
//     //     // },

//     //     legend: { display: true, labels: { fontColor: '#666' } },

//     //     layout: { padding: { left: 0, right: 0, top: 0, bottom: 50 } }
//     //   }
//     // });



//   // }




// render() {




//   return (
//     <div className="container1">
//       <Nav>
//       </Nav>

//       <Col size="md-12 sm-12">
//         <div className="row">
//           <Col size="md-2">
//             <NavSide>
//             </NavSide>
//           </Col>
//           <Col size="md-10">
//             <Jumbotron>
//               <h2>Summary of Sales and Inventory</h2>
//             </Jumbotron>


//             {/* <Summary>
//               <div class="container">
//                 <div class="row">
//                   <div class="col-sm">
//                     Order Trend
//                         <canvas id="myChart" width="400" height="400"></canvas>
//                   </div>
//                   <div class="col-sm">
//                     Revenue: Total=$?
//                         <canvas id="myChart2" width="400" height="400"></canvas>
//                   </div>
//                 </div>
//               </div>
//             </Summary> */}

//               <div className="ag-theme-balham">
//                 <AgGridReact
//                   // columnDefs={this.state.columnDefs}
//                   rowData={this.state.rowData}>
//                     <AgGridColumn field="image" width={85} pinned editable resizable
//                                       cellRenderer={Dashboard.itemCellRenderer}
//                                       // cellEditorParams={{ values: COUNTRY_LIST, cellRenderer: RichGridDeclarativeExample.countryCellRenderer}} cellEditor="agRichSelect"
//                                       filter="set" sortable filterParams={{cellRenderer: Dashboard.itemCellRenderer, cellHeight:20}}>
//                         </AgGridColumn>
//                     <AgGridColumn field="title" width={300} headerName="Title" filter="text" pinned sortable resizable></AgGridColumn>
//                     <AgGridColumn field="channel" width={105} headerName="Storefront" filter="text" sortable resizable></AgGridColumn>
//                     <AgGridColumn field="listing_id" width={105} headerName="Listing ID" filter="text" sortable resizable></AgGridColumn>
//                     <AgGridColumn field="sku" width={85} headerName="SKU" filter="text" sortable resizable></AgGridColumn>
//                     <AgGridColumn field="views" width={105} headerName="Views" filter="text" sortable resizable cellRendererFramework={ProficiencyCellRenderer}></AgGridColumn>
//                     <AgGridColumn field="quantity" width={100} headerName="Quantity" filter="text" sortable resizable></AgGridColumn>
//                     <AgGridColumn field="price" width={85} headerName="Price" filter="text" sortable resizable></AgGridColumn>
//                     {/* <AgGridColumn field="url" width={500} headerName="URL" filter="text" sortable resizable></AgGridColumn> */}
//                     <AgGridColumn field="url" width={500} editable resizable
//                                       cellRenderer={Dashboard.urlCellRenderer}
//                                       // cellEditorParams={{ values: COUNTRY_LIST, cellRenderer: RichGridDeclarativeExample.countryCellRenderer}} cellEditor="agRichSelect"
//                                       filter="set" sortable filterParams={{cellRenderer: Dashboard.urlCellRenderer, cellHeight:20}}>
//                         </AgGridColumn>
//                 </AgGridReact>
//               </div>


//             {this.state.results.length ? (
//               <DisplayContainer>
//                 {this.state.results.map(item => {
//                   return (
//                     <ProductCard
//                       image={item.image}
//                       title={item.title}
//                       price={item.price}
//                       quantity={item.quantity}
//                       listing_id={item.listing_id}
//                       key={item.listing_id}
//                       sku={item.sku}
//                       views={item.views}
//                       url={item.url}
//                       description={item.description}
//                       state={item.state}
//                       channel={item.channel} />
//                   );
//                 }
//                 )}
//               </DisplayContainer>
//             ) : (
//                 <h3>No Results to Display</h3>
//               )}
//           </Col>
//         </div>
//       </Col>
//     </div>
//   );
// }
// }

// export default Dashboard;