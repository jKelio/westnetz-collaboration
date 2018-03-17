import { Person } from './Person';

export class Process {
    private title: string;
    private description: string;
    private state: string;

    private start: Date;
    private end: Date;

    private children: Array<Process>;
    private persons: Array<Person>;

    constructor(title: string, description: string, start: Date, end: Date) {
        this.title = title;
        this.description = description;

        this.start = start;
        this.end = end;

        this.children = [];
        this.persons = [];
    }

    getTitle(): string {
        return this.title;
    }

    getStart(): Date {
        return this.start;
    }

    getEnd(): Date {
        return this.end;
    }

    getDescription(): string {
        return this.description;
    }

    getChildren(): Array<Process> {
        return this.children;
    } 

    getPersons(): Array<Person> {
        return this.persons;
    }

    setState(state: string): void {
        this.state = state;
    }

    addChild(child: Process): void {
        this.children.push(child);
    }

    addPerson(person: Person): void {
        this.persons.push(person);
    }
}