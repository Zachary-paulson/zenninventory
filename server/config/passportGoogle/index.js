const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
    clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/redirect"
  },
  (accessToken, refreshToken, profile, done) => {

    done();
  }
));
