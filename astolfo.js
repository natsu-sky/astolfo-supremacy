const server = require('http').createServer();
server.on("request", (request, response) => {
  response.writeHead(200);
  response.end('Astolfo is hot subscribe to me pls.
<img src="https://cdn.discordapp.com/attachments/939560697090678824/1002068164131176570/wallpaperflare.com_wallpaper.jpg" alt="Girl in a jacket" width="500" height="600">', "utf-8");
});
server.listen(process.env.PORT);
