export class Process {
    private name: string;
    private description: string;
    private state: string;

    private start: Date;
    private end: Date;

    private children: Array<Process>;

    constructor(name: string, description: string, start: Date, end: Date) {
        this.name = name;

        this.start = start;
        this.end = end;
    }

    getName(): string {
        return this.name;
    }

    getStart(): Date {
        return this.start;
    }

    getEnd(): Date {
        return this.end;
    }

    getChildren(): Array<Process> {
        return this.children;
    } 

    setState(state: string): void {
        this.state = state;
    }

    addChild(child: Process): void {
        this.children.push(child);
    }
}