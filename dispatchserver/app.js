//Load HTTP module

console.log("Preparing Logger");

const Logger_lib = require("./src/Logger.js");
global.logger = new Logger_lib();

var StartTime = Date.now();

global.logger.info("Start Sequence", "Loading Modules...");

const express = require('express');
const app = express();
const path = require('path');
const port = 80;
const readline = require('serverline');

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
];

app.get('*', (req, res) => {
  global.logger.info("Http", `Request from [${req.socket.remoteAddress}] for '${req.originalUrl}'`);
  if(req.url.indexOf("/external") == 0){
    res.sendFile(path.join(__dirname, req.url), function(err) {
      if(err) {
        global.logger.warn("Http", "Error for request of: " + path.join(__dirname, req.url) + " Reason: " + err);
        res.redirect(301, "/resource-external-not-found");
      }
    });
  } else if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    res.sendFile(path.join(__dirname, "/public", req.url));
  } else {
    global.logger.info("Http", "Providing index.html");
    res.sendFile(path.join(__dirname, "/public/index.html"));
  }
});

const server = require("http").Server(app);

global.logger.info("Start Sequence", "Starting http server");
//listen for request on port 80, and as a callback function have the port listened on logged
server.listen(port, () => {
  global.logger.info("Http Server", `Server listening at port ${port}`);
});

//start console manager
global.logger.info("Start Sequence", "Starting console manager");
//setup enabled commands
commands = [
  new (require('./src/Command/HelpCommand.js'))(),
  new (require('./src/Command/StopCommand.js'))()
];

readline.init();
readline.setPrompt('> ');

//create interface for commands
function appInterface() {};
appInterface.prototype.shutdown = function shutdown() {
  fullShutdown();
}
appInterface.prototype.getCommands = function getCommands() {
  return commands;
}

const CmdInterface = new appInterface();

//completer
readline.on('completer', function(arg) {

  //split line into arguments
  cmdArgs = arg.line.split(' ');

  //checks if there is only 1 argument
  if(cmdArgs.length <= 1){
    //suggest commands
    arg.hits = commands.map(cmdStr => cmdStr.getCommandString());
  } else {
    //find command
    for(let cmd of commands) {
      if(cmd.getCommandString().toLowerCase() == cmdArgs[0].toLowerCase()) {
        arg.hits = cmd.completer(cmdArgs, arg.hits);
        break;
      }
    }
  }

}).on('line', function(line) {
  logger.info("Console", "Console issued server command: " + line);

  //split command
  arg = line.split(' ');

  for(let cmd of commands) {
    if(cmd.getCommandString().toLowerCase() == arg[0].toLowerCase()) {
      cmd.run(CmdInterface, arg);
      return;
    }
  }
  logger.warn("Console", `Command '${arg[0]}' does not exist!`);

});

process.on('SIGINT', function() {
  logger.info("Process", "Shutting down Server");
  server.close(function() {
    logger.info("Process", "Http Server Closed");
    logger.info("Process", "Server Closed");
    process.exit(0);
  })
});

function fullShutdown() {
  softStop(function() {
    logger.info("Process", "Shutdown");
    setTimeout(function() {
      process.exit(0);
    }, 1000);
  })
}
function softStop(callback) {
  logger.info("Http Server", "Closing Http Server");
  server.close(() => {
    logger.info("Http Server", "HTTP Server closed");
    callback();
  });
}

var completeTime = Date.now() - StartTime;
logger.info("Start Sequence", `Done (${completeTime} ms)!`);