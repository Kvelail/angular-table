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

    selectedCheckboxCounter: number = 0;

    private searchFilterSubject = new Subject<any>();
    private checkboxSubject = new Subject<any>();

    searchFilterObservable$ = this.searchFilterSubject.asObservable();
    checkboxObservable$ = this.checkboxSubject.asObservable();

    constructor() {}

    getPersons(): Observable<Person[]> {
        return this.personsSubject.asObservable();
    }

    filterPersons(searchTerm: string) {
        const filteredPersons = this.persons.filter(
            (person) =>
                person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                person.phone.includes(searchTerm) ||
                person.ssn.includes(searchTerm) ||
                person.dob.includes(searchTerm) ||
                person.hired.includes(searchTerm) ||
                person.cdl.includes(searchTerm) ||
                person.cdl_exp.toString().includes(searchTerm) ||
                person.med_exp.toString().includes(searchTerm) ||
                person.mvr_exp.toString().includes(searchTerm),
        );

        return filteredPersons;
    }

    toggleDropdownMenu(id: number) {
        this.persons = this.persons.map((person) =>
            person.id === id
                ? { ...person, isDropdownOpened: !person.isDropdownOpened }
                : { ...person, isDropdownOpened: false },
        );
    }

    switchIsCheckboxChecked(id: number, isChecked: boolean) {
        this.persons = this.persons.map((person) =>
            person.id === id
                ? { ...person, isChecked: !person.isChecked }
                : person,
        );

        if (!isChecked) {
            this.decrementCheckboxCounter();
        } else {
            this.incrementCheckboxCounter();
        }
    }

    incrementCheckboxCounter() {
        this.selectedCheckboxCounter += 1;
    }

    decrementCheckboxCounter() {
        this.selectedCheckboxCounter -= 1;
    }

    handleCheckboxChange() {
        this.checkboxSubject.next(this.selectedCheckboxCounter);
    }

    handleSearchFilter(searchTerm: string) {
        const filteredPersons = this.filterPersons(searchTerm);

        this.searchFilterSubject.next(filteredPersons);
    }
}
