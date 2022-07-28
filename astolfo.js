const server = require('http').createServer();
server.on("request", (request, response) => {
  response.writeHead(200);
  response.end("Astolfo is hot.", "utf-8");
});
server.listen(process.env.PORT);
