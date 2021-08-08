function Logger() {
    const logpath = "./logs/";
    const extension = ".log";

    console.log("discovering filename");
    let date_ob = new Date();
    let date_string = date_ob.toISOString().replace(/T.+/, '');

    //check if file with date already exists
    const fs = require('fs');
    var filename = logpath + date_string;
    try{
        if(!fs.existsSync(logpath)) {
            fs.mkdirSync(logpath);
        }
        var logNum = 0
        var curFileName;
        do {
            curFileName = filename + ' - (' + logNum + ')' + extension;
            logNum++;
        } while(fs.existsSync(curFileName));
        //name found, use
        filename = curFileName;
    } catch(err) {
        console.error(err);
        console.warn("Unable to log files shutting down: Logger failed on file checking");
        process.exit(1);
    }
    console.log("Found usable file: " + filename);

    const winston = require('winston');

    const logLevels = {
        levels: {
            error: 0,
            warn: 1,
            info: 2
        },
        colors: {
            error: 'red',
            warn: 'yellow',
            info: 'white'
        }
    }
    winston.addColors(logLevels.colors);
    const fileformat = winston.format.combine(
        winston.format.printf(({ level, message, label, timestamp }) => { return `[${timestamp}] [${label}/${level}]: ${message}`})
    );
    const consoleformat = winston.format.combine(
        winston.format.colorize({all: true}),
        winston.format.printf(({ level, message, label, timestamp }) => 
            { return `\x1b[36m[${timestamp}] [\x1b[32m${label}\x1b[36m/${level}\x1b[36m]: ${message}` })
    );

    this.logger = winston.createLogger({
        level: 'info',
        levels: logLevels.levels,
        transports: [
            new winston.transports.Console({
                format: consoleformat
            }),
            new winston.transports.File({ 
                format: fileformat,
                filename: filename
            })
        ]
    });

    this.info("Logging Manager", "Logger Started on: \"" + filename + "\"");
}

Logger.prototype.getCurrentTimeString = function getCurrentTimeString() {
    let now = Date.now();
    let now_ob = new Date(now);

    return now_ob.toISOString()
        .replace(/T/, '|')
        .replace(/\..+/, '');
}

Logger.prototype.log = function log(level, label, message) {
    this.logger.log({
        level: level,
        label: label,
        timestamp: this.getCurrentTimeString(),
        message: message
    });
}

Logger.prototype.info = function info(label, message) {
    this.log('info', label, message);
}

Logger.prototype.warn = function warn(label, message) {
    this.log('warn', label, message);
}

Logger.prototype.err = function err(label, message) {
    this.log('error', label, message);
}

module.exports = Logger;