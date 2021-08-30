const app = require("./index");
const environements = require('./environement')

require('./startup/logging')();
require('./startup/validation')();

app.listen(environements.port, () => {
    console.log(`App is running on port ${environements.port}`)
})