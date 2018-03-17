import { Person } from './Person';

export class Process {
    private title: string;
    private description: string;
    private status: string;

    private start: Date;
    private end: Date;

    private children: Array<Process>;
    private persons: Array<Person>;
    private files: Array<{path:string , name: string}>;

    constructor(title: string, description: string, start: Date, end: Date) {
        this.title = title;
        this.description = description;

        this.start = start;
        this.end = end;

        this.children = [];
        this.persons = [];
        this.files = [];
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

    setStatus(status: string): void {
        this.status = status;
    }

    addChild(child: Process): void {
        this.children.push(child);
    }

    addPerson(person: Person): void {
        this.persons.push(person);
    }

    addFile(file: {path: string, name: string}): void {
        this.files.push(file);
    };
}