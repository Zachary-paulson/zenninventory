const passport = require('passport');
const eBayStrategy = require('passport-ebay').default;
require('dotenv').config();

passport.use(new eBayStrategy({
    clientID: process.env.REACT_APP_EBAY_APP_ID,
    clientSecret: process.env.REACT_APP_EBAY_APP_SECRET,
    ruName: process.env.REACT_APP_EBAY_APP_REDIRECT_URL_NAME
  },
function(accessToken, refreshToken, done){
  console.log('This is the Ebay Access Token: ' + accessToken);
  done();
}));

module.exports = passport;
