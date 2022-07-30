const server = require('express')();
server.get("/", (request, response) => {
  response.sendFile("./wallpaperflare.com_wallpaper.jpg");
  response.status(200);
  response.end();
});
server.listen(process.env.PORT);
