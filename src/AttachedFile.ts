import { Person } from './Person';

export class AttachedFile {
    private name: string;
    private path: string;
    private type: string;

    private geo: {lat: number, lng: number};
    private author: Person;

    constructor(path: string, geo: {lat: number, lng: number}, author: Person) {
        this.path = path;
        this.name = path.split('/')[path.split('/').length - 1];
        this.type = path.split('.')[path.split('.').length - 1];

        this.geo = geo;
        this.author = author;
        
        // map extensions
        switch(this.type) {
            case 'jpg':
            case 'jpeg':
            case 'img':
            this.type = 'image';
            case 'pdf':
            break;
            default: 
            this.type = 'else';
        }
    }
}