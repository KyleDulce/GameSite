function Logger() {
    const logpath = "./logs/";
    const extension = ".log";

    console.log("discovering filename");
    let date_ob = new Date();
    //this.date_string = date_ob.getFullYear().toString() + "-" + date_ob.getMonth().toString() + "-" + date_ob.getDate().toString();
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
    const logFormat = winston.format.printf(({ level, message, label, timestamp }) => { return `[${timestamp}] [${label}/${level}]: ${message}`})
    winston.addColors(logLevels.colors);
    winston.format.combine(
        winston.format.colorize(),
        logFormat
    );


    this.logger = winston.createLogger({
        levels: logLevels.levels,
        format: logFormat,
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: filename})
        ]
    });

    this.info("Logging Manager", "Logger Started on: \"" + filename + "\"");
}

Logger.prototype.getCurrentTimeString = function getCurrentTimeString() {
    let now = Date.now();
    let now_ob = new Date(now);
    // return now_ob.getFullYear().toString() + "-" + now_ob.getMonth().toString() 
    //         + "-" + now_ob.getDate().toString() + "|" + now_ob.getHours().toString() 
    //         + ":" + now_ob.getMinutes().toString() + ":" + now_ob.getSeconds().toString();
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