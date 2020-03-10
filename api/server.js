const express = require("express");

const hubsRouter = require("../hubs/hubs-router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  const query = req.query;
  console.log("query", query);
  res.status(200).json(query);

  //   res.send(`
  //     <h2>Lambda Hubs API</h>
  //     <p>Welcome to the Lambda Hubs API</p>
  //   `);
});

// the router handles enpoints that being with /api/hubs
server.use("/api/hubs", hubsRouter);

module.exports = server;
