const path = require("path");
const server = require('express')();
server.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, 'wallpaperflare.com_wallpaper.jpg'));
  response.status(200);
  response.end();
});
server.listen(process.env.PORT);
