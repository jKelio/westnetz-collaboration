import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Process } from '../../Process';
import { Project } from '../../Project';
import { Person } from '../../Person';

@Injectable()
export class ProjectDummyProvider {

  constructor () {}

    getDummy() : Project {
        var process1 = new Process('Prozess #1',
            'Prozessbeschreibung für Prozess Nummer 1.',
            new Date(2018, 2, 16),
            new Date(2018, 2, 27));

        var process2 = new Process('Prozess #2',
            'Prozessbeschreibung für Prozess Nummer 2.',
            new Date(2018, 2, 20),
            new Date(2018, 3, 3));

        var process3 = new Process('Prozess #3',
            'Prozessbeschreibung für Prozess Nummer 3.',
            new Date(2018, 3, 3),
            new Date(2018, 4, 18));

        
        
        var dummy = new Project('Test Projekt', 
            'Startstr. 123', 
            'Endstr. 456', 
            new Date(2018, 2, 15), 
            new Date(2018, 7, 15));
        
        var person1 = new Person('Person 1', 
            '+49 123 456 789', 
            'example.mail@domain.com',
            'Beispielfirma',
            'Beispieljob');
        var person2 = new Person('Person 2', 
        '+49 123 456 789', 
        'example.mail@domain.com',
        'Beispielfirma',
        'Beispieljob');
        var person3 = new Person('Person 3', 
        '+49 123 456 789', 
        'example.mail@domain.com',
        'Beispielfirma',
        'Beispieljob');

        process1.addPerson(person1);
        process2.addPerson(person1);
        process2.addPerson(person2);
        process3.addPerson(person1);
        process3.addPerson(person2);
        process3.addPerson(person3);
        
        dummy.addProcess(process1);
        dummy.addProcess(process2);
        dummy.addProcess(process3);



        return dummy;
    }

}
