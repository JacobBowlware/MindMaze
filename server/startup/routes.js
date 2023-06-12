const users = require('../routes/users');
const express = require('express');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api/users', users);
}