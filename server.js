const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.rrlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoute')(app);

app.listen(PORT, () => {
    console.log(`Server available at localHost${PORT}`);
});