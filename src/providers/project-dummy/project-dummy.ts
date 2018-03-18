import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Process } from '../../Process';
import { Project } from '../../Project';
import { Person } from '../../Person';
import { AttachedFile } from '../../AttachedFile';

@Injectable()
export class ProjectDummyProvider {

  constructor () {}

    getDummy() : Project {
        var process1 = new Process('Prozess #1',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            new Date(2018, 2, 16),
            new Date(2018, 2, 27),
            'Offen',
            'tiefbauer');

        var process2 = new Process('Prozess #2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            new Date(2018, 2, 20),
            new Date(2018, 3, 3),
            'Offen',
            'techniker');

        var process3 = new Process('Prozess #3',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            new Date(2018, 3, 3),
            new Date(2018, 4, 18),
            'Offen',
            'vermesser');
        
        
        var dummy = new Project('Test Projekt',
            'Projektstadt',
            'Startstr. 123', 
            'Endstr. 456', 
            new Date(2018, 2, 15), 
            new Date(2018, 7, 15));
        
        var person1 = new Person('Person 1', 
            '+49 123 456 789', 
            'example.mail@domain.com',
            'Beispielfirma',
            'Beispieljob',
            './assets/imgs/workers.jpeg');
        var person2 = new Person('Person 2', 
            '+49 123 456 789', 
            'example.mail@domain.com',
            'Beispielfirma',
            'Beispieljob',
            './assets/imgs/workers.jpeg');
        var person3 = new Person('Person 3', 
            '+49 123 456 789', 
            'example.mail@domain.com',
            'Beispielfirma',
            'Beispieljob',
            './assets/imgs/workers.jpeg');

        var file1 = new AttachedFile(
            './assets/docs/Plan (Maßstab 500).pdf', {
                lat: 0.0,
                lng: 0.0
            },
            person1
        );

        var file2 = new AttachedFile(
            './assets/docs/Plan (Maßstab 1000).pdf', {
                lat: 0.0,
                lng: 0.0
            },
            person1
        );

        var file3 = new AttachedFile(
            './assets/docs/Plan (Maßstab 5000).pdf', {
                lat: 0.0,
                lng: 0.0
            },
            person1
        );

        var file4 = new AttachedFile(
            './assets/docs/Verlegung 1.jpg', {
                lat: 0.0,
                lng: 0.0
            },
            person2
        );

        var file4 = new AttachedFile(
            './assets/docs/Verlegung 2.jpg', {
                lat: 0.0,
                lng: 0.0
            },
            person2
        );

        var file5 = new AttachedFile(
            './assets/docs/Verlegung 3.jpg', {
                lat: 0.0,
                lng: 0.0
            },
            person3
        );

        process1.addFile(file1);
        process1.addFile(file2);
        process1.addFile(file3);
        process1.addFile(file4);
        process1.addFile(file5);

        process2.addFile(file5);
        process2.addFile(file4);
        process2.addFile(file3);

        process3.addFile(file2);
        process3.addFile(file3);
        process3.addFile(file5);

        process1.addPerson(person1);
        process1.addPerson(person2);
        process1.addPerson(person3);
        process2.addPerson(person1);
        process2.addPerson(person2);
        process3.addPerson(person2);
        
        dummy.addProcess(process1);
        dummy.addProcess(process2);
        dummy.addProcess(process3);

        return dummy;
    }

}
