const passport = require("passport");
const eBayStrategy = require("passport-ebay").default;
const axios = require("axios");

passport.use(
  new eBayStrategy(
    {
      clientID: process.env.REACT_APP_EBAY_APP_ID,
      clientSecret: process.env.REACT_APP_EBAY_APP_SECRET,
      ruName: process.env.REACT_APP_EBAY_APP_REDIRECT_URL_NAME
    },
    function(accessToken, refreshToken, done) {
      // // GET request for remote image
      // axios({
      //   method: 'GET',
      //   url: URL(),
      //   Accept: 'json',
      //   headers: {
      //     Authorization:'Bearer ' + accessToken,
      //     'content-type': 'json'
      //   }})
      //   .then((response) =>{
      //   console.log(response);
      //   done();
      // }).catch(err =>  {
      //   console.log('ERROR: ' + err);
      //   done()
      // });
      axios
        .get(URL(), {
          headers: {
            Authorization: "Bearer " + accessToken,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }

        })
        .then(res => {
          console.log('Success ' + res);
          done();
        })
        .catch(err => console.log('error ' + err));
        done();
    }
  )
);

function URL() {
  return "https://api.ebay.com/sell/inventory/v1/inventory_item?limit=2&offset=0";
}

module.exports = passport;
