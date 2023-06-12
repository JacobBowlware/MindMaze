const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/config')();

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});