
function StopCommand() {}

StopCommand.prototype.getCommandString = function getCommandString() {return 'stop'}

StopCommand.prototype.completer = function completer(args, hits) {return [];}

StopCommand.prototype.cmdFormat = function cmdFormat() {return 'stop'; }

StopCommand.prototype.description = function description() {return 'Stops the server'; }

StopCommand.prototype.run = function run(appInterface, args) {
    appInterface.shutdown();
}

module.exports = StopCommand;