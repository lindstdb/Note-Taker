const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoute');


app.use(express.static('public'));
app.use(express.rrlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log('Server available at port:${PORT}')
});