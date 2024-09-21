const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // error: null, allowed: true
    } else {
      callback(new Error("Not allowed by CORS..."));
    }
  },
  credentials: true, // Sets Access-Control-Allow-Origin header to true
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
