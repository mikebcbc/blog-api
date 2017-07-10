const express = require('express');
const morgan = require('morgan');
const app = express();

const blogPostRouter = require('./blogPostRouter');