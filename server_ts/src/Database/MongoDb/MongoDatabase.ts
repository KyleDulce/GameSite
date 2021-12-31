
import { MongoClient } from "mongodb";
import AppInterface from "../../app";
import Logger from "../../Logger";

export default class MongoDatabase {

    public static readonly MONO_LOGGER_LABEL = "MonoDb-Manager";
    public static readonly MONO_PROTOCOL = "mongodb";
    public static readonly MONO_ADDRESS = "localhost:27017";

    private client: MongoClient;

    public static setupDatabase(callback: Function): MongoDatabase {
        return new MongoDatabase(callback);
    }

    private constructor(callback: Function) {
        var logger: Logger = AppInterface.Logger;

        logger.info(MongoDatabase.MONO_LOGGER_LABEL, "Starting MongoDbClient");

        this.client = new MongoClient(MongoDatabase.MONO_PROTOCOL + "://" + MongoDatabase.MONO_ADDRESS);

        this.client.connect().then(() => {
            logger.info(MongoDatabase.MONO_LOGGER_LABEL, "MongoDbClient Connected!");
            callback();
        }).catch((err) => {
            logger.err(MongoDatabase.MONO_LOGGER_LABEL, "MongoDbClient Could not connect:\n" + err);
            callback();
        });
    }

}