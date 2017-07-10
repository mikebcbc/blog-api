const express = require('express');
const morgan = require('morgan');
const app = express();

const blogPostRouter = require('./blogPostRouter');

app.use(morgan('common'));

app.use('/blog-posts', blogPostRouter);

app.listen(8080, () => {
	console.log('We on port 8080.');
})