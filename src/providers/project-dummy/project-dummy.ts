import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Process } from '../../Process';
import { Project } from '../../Project';

@Injectable()
export class ProjectDummyProvider {

  constructor () {}

    getDummyProject() : Project {
        var dummy: Project;

        dummy = new Project('Test Projekt', 
            'Startstr. 123', 
            'Endstr. 456', 
            new Date(2018, 17, 3), 
            new Date(2018, 17, 8));
        
        dummy.addProcess(new Process('Prozess #1',
            'Prozessbeschreibung für Prozess Nummer 1.',
            new Date(2018, 18, 3),
            new Date(2018, 27, 3)
        ));

        dummy.addProcess(new Process('Prozess #2',
            'Prozessbeschreibung für Prozess Nummer 2.',
            new Date(2018, 20, 3),
            new Date(2018, 3, 4)
        ));

        dummy.addProcess(new Process('Prozess #3',
            'Prozessbeschreibung für Prozess Nummer 3.',
            new Date(2018, 3, 4),
            new Date(2018, 18, 5)
        ));

        return dummy;
    }

}
