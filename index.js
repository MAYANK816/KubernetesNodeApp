const express = require('express');
const app = express();
const server = require('./Routes/app');
const bodyParser = require('body-parser');
const Cors = require('cors');

app.use(bodyParser.json())
app.use(express.json());
app.use(Cors());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8001;

// Routes are defined in Routes/app.js
app.use('/', server);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
