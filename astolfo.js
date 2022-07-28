const server = require('http').createServer();
server.on("request", (request, response) => {
  response.writeHead(200);
  response.end("Astolfo is hot subscribe to me pls.", "utf-8");
});
server.listen(process.env.PORT);
