import { Person } from './Person';

export class ConstructionSite {

    private address: string;
    private location: {lat: number, lng: number};
    
    private present: Array<Person>;

    constructor(address: string, location: {lat: number, lng: number}) {
        this.present = [];
    }

    public checkIn(person: Person): void {
        this.present.push(person);
    }

    public checkOut(person: Person): void {
        // not implemented yet
    }
}