const app = require("./index");
const environements = require('./environement')
const winston = require('winston')

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
  });