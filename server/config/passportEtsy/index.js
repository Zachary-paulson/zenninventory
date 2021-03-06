const passport = require('passport');
const EtsyStrategy = require('passport-etsy');

passport.use(new EtsyStrategy({
    consumerKey: process.env.REACT_APP_ETSY_KEY,
    consumerSecret: process.env.REACT_APP_ETSY_SECRET,
    callbackURL: '/auth/etsy/callback'
  },
  function (token, tokenSecret, profile, done){
    console.log({etsyID: profile.id});
    console.log({etsyID: profile.id});
    console.log({etsyID: profile.id});
    done();
  }
));
