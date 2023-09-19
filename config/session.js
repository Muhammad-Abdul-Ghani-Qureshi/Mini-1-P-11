const mongoDbStore = require("connect-mongodb-session");

const expresssSession = require('express-session')

function createSessionStore() {
  const MongoDbStore = mongoDbStore(expresssSession);

  const store = new MongoDbStore({
    uri: "mongodb://127.0.0.1:27017",
    databaseName: "robo-store",
    collection: "sessions",
  });

  return store;
}

function createSessionCongif() {
  return {
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 30 * 3600 * 1000,
    },
  };
}

module.exports = createSessionCongif;
