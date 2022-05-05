import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Person } from 'src/app/static-utils-types/types';

import { PERSONS } from '../static-utils-types/persons';

@Injectable({
    providedIn: 'root',
})
export class TableService {
    persons: Person[] = PERSONS;
    personsSubject = new Subject<Person[]>();

    constructor() {}

    getPersons(): Observable<Person[]> {
        return this.personsSubject.asObservable();
    }

    toggleDropdownMenu(id: number) {
        this.persons = this.persons.map((person) =>
            person.id === id
                ? { ...person, isDropdownOpened: !person.isDropdownOpened }
                : { ...person, isDropdownOpened: false },
        );
    }
}
