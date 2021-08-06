
function StopCommand() {}

StopCommand.prototype.getCommandString = function getCommandString() {return 'stop'}

StopCommand.prototype.completer = function completer(args, hits) {return [];}

StopCommand.prototype.run = function run(appInterface) {
    appInterface.shutdown();
}

module.exports = StopCommand;