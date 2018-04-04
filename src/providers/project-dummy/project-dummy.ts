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
        var process1 = new Process('Besichtigung',
            'Besuch Baustelle',
            new Date(2018, 3, 15),
            new Date(2018, 3, 16),
            'In Bearbeitung',
            'kommune');

        var process5 = new Process('Erdarbeiten',
            'Inspektion nach Plan.',
            new Date(2018, 3, 1),
            new Date(2018, 3, 7),
            'Offen',
            'tiefbauer');

        var process2 = new Process('Absicherung',
            'Nach 500 Metern Feedback für Baustellenkontrolle geben.',
            new Date(2018, 3, 4),
            new Date(2018, 3, 10),
            'In',
            'techniker');

        var process3 = new Process('Kabelverlegung',
            'Wichtig: Mit Herrn Müller Techniktermin besprechen.',
            new Date(2018, 3, 9),
            new Date(2018, 3, 24),
            'Offen',
            'vermesser');

        var process4 = new Process('Abnahme',
            'Inspektion nach Plan.',
            new Date(2018, 2, 25),
            new Date(2018, 2, 26),
            'Offen',
            'aufmaß');
        
        var dummy = new Project('Leitungsverlegung',
            'Projektstadt',
            'Startstr. 123', 
            'Endstr. 456', 
            new Date(2018, 2, 15), 
            new Date(2018, 7, 15));
        
        var person1 = new Person('Daniel Müller', 
            '+49 237 421 938', 
            'mueller.daniel.mail@gmx.com',
            'Tiefbau AG',
            'Tiefbauer',
            './assets/imgs/tiefbau.jpg');
        var person2 = new Person('Andreas Meier', 
            '+49 103 236 772', 
            'andr.meier@web.com',
            'Ver-Maß Ag',
            'Vermesser',
            './assets/imgs/vermesser.jpg');
        var person3 = new Person('Ulrike Schmidt', 
            '+49 162 056 761', 
            'ulrike.schmidt@gmail.com',
            'Westnetz',
            'Techniker',
            './assets/imgs/aufmaß.jpg');

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

        var file5 = new AttachedFile(
            './assets/docs/Verlegung 2.jpg', {
                lat: 0.0,
                lng: 0.0
            },
            person2
        );

        var file6 = new AttachedFile(
            './assets/docs/Verlegung 3.jpg', {
                lat: 0.0,
                lng: 0.0
            },
            person3
        );

        process1.addFile(file1);
        process1.addFile(file2);
        process1.addFile(file4);
        process1.addFile(file5);

        process2.addFile(file5);
        process2.addFile(file4);
        process2.addFile(file3);

        process3.addFile(file2);
        process3.addFile(file3);
        process3.addFile(file5);

        process4.addFile(file2);
        process4.addFile(file4);

        process5.addFile(file5);
        process5.addFile(file4);
        process5.addFile(file1);

        process1.addPerson(person1);
        process1.addPerson(person2);
        process1.addPerson(person3);
        process2.addPerson(person1);
        process2.addPerson(person2);
        process3.addPerson(person3);
        process4.addPerson(person2);
        process4.addPerson(person3);
        process5.addPerson(person2);
        process5.addPerson(person3);
        
        dummy.addProcess(process1);
        dummy.addProcess(process2);
        dummy.addProcess(process5);
        dummy.addProcess(process3);
        dummy.addProcess(process4);

        return dummy;
    }

}
