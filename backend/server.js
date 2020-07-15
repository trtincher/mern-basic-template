const express = require('express');
const cors = require('cors');

const app = express();

const routeText = 'item';

// Add the middleware code needed to accept incoming data and add it to req.body
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const itemRouter = require(`./controllers/${routeText}Routes`);
app.use(`/api/${routeText}s/`, itemRouter);

app.listen(4000, () => console.log('Server running on port 4000!'));
