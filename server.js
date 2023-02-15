// Require Dependencies
const express = require('express');

// Create express application
const app = express();

// Create PORT
const PORT = process.env.PORT || 3001;



// Use Exrpess to parse data
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoute')(app);

// Creates server listener
app.listen(PORT, function() {
    console.log(`Server is listening at PORT: ${PORT}`);
});