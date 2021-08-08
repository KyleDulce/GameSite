
import AppInterface from "../app";

export function getCommandObjects(): ConsoleCommand[] {
    if(ConsoleCommand.CommandObjects == null) {
        ConsoleCommand.CommandObjects = [
            new HelpCommand(),
            new StopCommand()
        ];
    }
    return ConsoleCommand.CommandObjects;
}

abstract class ConsoleCommand {
    public static CommandObjects: ConsoleCommand[];

    public abstract getCommandString(): string;
    public abstract getCompletion(args: string[], hits: string[]): string[];
    public abstract getCmdFormat(): string; 
    public abstract getCmdDescription() :string;
    public abstract run(args: string[]): void;
}

export class StopCommand extends ConsoleCommand {
    public getCommandString(): string { return "stop"; }
    public getCompletion(args: string[], hits: string[]): string[] { return []; }
    public getCmdFormat(): string { return 'stop'; }
    public getCmdDescription(): string { return 'Stops the Server' }
    public run(args: string[]): void {
        AppInterface.Shutdown();
    }
}

export class HelpCommand extends ConsoleCommand {
    public getCommandString(): string { return "help"; }
    public getCompletion(args: string[], hits: string[]): string[] { return []; }
    public getCmdFormat(): string { return 'help'; }
    public getCmdDescription(): string { return 'Shows this menu' }
    public run(args: string[]): void {
        var result = "Commands: ";

        for(let cmd of getCommandObjects()) {
            //result += "\n" + (cmd.getCmdFormat()) + " - " + (cmd.getCmdDescription);
            result += `\n\t ${cmd.getCmdFormat()} - ${cmd.getCmdDescription()}`;
        }

        AppInterface.Logger.info("Console", result);
    }
}