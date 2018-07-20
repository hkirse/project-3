const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

// Setup and connect to the Mongo DB
const mongoose = require("mongoose");
const connection=mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/crankhead");
const models = require('./models')(connection)

// get authentication functions
const authentication = require('./libs/authentication')(connection)
const middleware = require('./libs/middleware')

const app = express();
const PORT = process.env.PORT || 3001;

// Configure app to use sessions
app.use(session({ 
  secret: "test",
  resave: false,
  saveUnitialized: false
}))

// Define middleware here
//configure bodyParser and make express use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize())
app.use(passport.session())
//Configure passport to use local strategy
passport.use(new LocalStrategy(authentication.authenticateUser))
passport.serializeUser(authentication.serializeUser)
passport.deserializeUser(authentication.deserializeUser)
//Configure custom database middleware to attach connection to all request objects.
app.use(middleware.databaseHandler(models))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use('/api', require('./routes/api/')())
app.use('/auth', require('./routes/auth')())


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
