import { Process } from './Process';

export class Project {
    private title: string;

    private addr_city: string;
    private addr_start: string;
    private addr_end: string;

    private date_start: Date;
    private date_end: Date;

    private processes: Array<Process>;

    //private users: Array<User>;

    constructor(title: string, addr_city: string, addr_start: string, addr_end: string, date_start: Date, date_end: Date){
        this.title = title;
        this.addr_city = addr_city;
        this.addr_start = addr_start;
        this.addr_end = addr_end;
        this.date_start = date_start;
        this.date_end = date_end;

        this.processes = [];
    }

    getTitle () :string {
        return this.title;
    }

    getDate_start() :Date {
        return this.date_start;
    }

    getDate_end() :Date {
        return this.date_end;
    }

    getAddr_city(): string {
        return this.addr_city;
    };

    getAddr_start() :string {
        return this.addr_start;
    }

    getAddr_end() :string {
        return this.addr_end;
    }

    getProcesses(): Array<Process> {
        return this.processes;
    }

    getProcess(date: Date): Process {

        //return this.processes[2];

        return this.processes.find((curr: Process) => {

            if(curr.getStart() < date && date <= curr.getEnd())
                return true;
        });
    }

    addProcess(process: Process): void {
        this.processes.push(process);
    }

    getCalendarEvents() {
        return this.processes.map(function (curr: Process) {
            return {
                id: curr.getTitle(),
                resourceId: curr.getRole(),
                title: curr.getTitle(),
                start: curr.getStart().toISOString(),
                end: curr.getEnd().toISOString()
            };
        });
    }
}