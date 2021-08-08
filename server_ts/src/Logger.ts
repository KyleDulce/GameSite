import winston from 'winston';

export default class AppLogger {
    private static logpath: string = "./logs/";
    private static extension: string = ".log";

    private logger: winston.Logger;

    constructor() {
        console.log("finding filename");

        //find valid file for log
        let date_ob: Date = new Date();
        let date_string: string = date_ob.toISOString().replace(/T.+/, '');

        const fs = require('fs');
        var filename: string = AppLogger.logpath + date_string;

        //find valid file for date
        try {
            if (!fs.existsSync(AppLogger.logpath)) {
                fs.mkdirSync(AppLogger.logpath);
            }
            var logNum: number = 0
            var curFileName: string;
            do {
                curFileName = filename + ' - (' + logNum + ')' + AppLogger.extension;
                logNum++;
            } while (fs.existsSync(curFileName));
            //name found, use
            filename = curFileName;
        } catch (err) {
            console.error(err);
            console.warn("Unable to log files shutting down: Logger failed on file checking");
            process.exit(1);
        }
        console.log("Found usable file: " + filename);

        // const winston = require('winston');

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
            winston.format.printf((data) => 
                { return `[${data.timestamp}] [${data.label}/${data.level}]: ${data.message}` })
        );
        const consoleFormat = winston.format.combine(
            winston.format.colorize({all: true}),
            winston.format.printf((data) => 
                { return `\x1b[36m[${data.timestamp}] [\x1b[32m${data.label}\x1b[36m/${data.level}\x1b[36m]: ${data.message}` })
        );

        this.logger = winston.createLogger({
            level: 'info',
            levels: logLevels.levels,
            transports: [
                new (winston.transports.Console)({ format: consoleFormat}),
                new (winston.transports.File)({ filename: filename, format: fileformat })
            ]
        });

        this.info("Logging Manager", "Logger Started on: \"" + filename + "\"");
    }

    private getCurrentTimeString(): string {
        let now: number = Date.now();
        let now_ob: Date = new Date(now);

        return now_ob.toISOString()
            .replace(/T/, '|')
            .replace(/\..+/, '');
    }

    private log(level: string, label: string, message: string): void {
        this.logger.log(new MessageData(level, message, label, this.getCurrentTimeString()));
    }

    public info(label: string, message: string) {
        this.log('info', label, message);
    }

    public warn(label: string, message: string) {
        this.log('warn', label, message);
    }

    public err(label: string, message: string) {
        this.log('error', label, message);
    }
}

class MessageData {
    level: string
    message: string
    label: string
    timestamp: string
    constructor(level: string, message: string, label: string, timestamp: string) {
        this.level = level;
        this.message = message;
        this.label = label;
        this.timestamp = timestamp;
    }
}