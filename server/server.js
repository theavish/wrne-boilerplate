const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const distDir = path.join(__dirname, '..', 'client', 'dist');

const apiRouter = require('./routes/router.js')

app.use(morgan('dev'));
app.use('/', express.static(distDir));

app.use('/api', apiRouter);

app.listen(port, () => { console.log('listening on', port) });