// Create web server with Express
const express = require('express');
const app = express();
const port = 3000;

// Import comments data
const comments = require('./comments.json');