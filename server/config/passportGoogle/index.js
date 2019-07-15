const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../../../models/users');

passport.use(new GoogleStrategy({
    clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/redirect"
  },
  (accessToken, refreshToken, profile, done) => {
    new User({
      userName: profile.displayName,
      googleID: profile.id
    }).save().then((newUser) =>{
      console.log('new user created: ' + newUser);
    })
    console.log("AccessToken: " + accessToken);
    console.log("refreshToken: " + refreshToken);
    console.log("profile: " + profile);
    done();
  }
));
