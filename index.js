const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const server = express();
const zooRouter = require('./routes/zooRoutes');
const bearRouter = require('./routes/bearRoutes');
const db = knex(dbConfig.development);

server.use(express.json());
server.use(helmet());
server.use('/api/zoos', zooRouter);
server.use('/api/bears', bearRouter);

const port = 3300;
server.listen(port, function () {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
