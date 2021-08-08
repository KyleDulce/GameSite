
function HelpCommand() {}

HelpCommand.prototype.getCommandString = function getCommandString() {return 'help'}

HelpCommand.prototype.completer = function completer(args, hits) {return [];}

HelpCommand.prototype.cmdFormat = function cmdFormat() {return 'help'; }

HelpCommand.prototype.description = function description() {return 'Returns this help menu'; }

HelpCommand.prototype.run = function run(appInterface, args) {
    //construct help string
    var result = "Commands:";

    for(let cmd of appInterface.getCommands()) {
        result = result + "\n\t" + (cmd.cmdFormat()) + " - " + (cmd.description());
    }

    global.logger.info("Console", result);
}

module.exports = HelpCommand;