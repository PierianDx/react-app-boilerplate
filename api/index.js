const { router, get, post } = require('microrouter');
const hello = require('./hello');
const world = require('./world');

// Simple API Gateway for our microservices (used in local dev only)
module.exports = router(get('/hello', hello), post('/world', world));
