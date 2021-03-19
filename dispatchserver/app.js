//Load HTTP module
const express = require('express');
const app = express();
const path = require('path');
const port = 80;

app.use(express.static(__dirname + '/public'));

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
];

app.get('*', (req, res) =>{
  if(allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    res.sendFile(path.join(__dirname));
  } else {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  }
});

const server = require("http").Server(app);

//listen for request on port 80, and as a callback function have the port listened on logged
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
