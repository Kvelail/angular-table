import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Person } from 'src/app/static-utils-types/types';

import { getPersonsData } from '../static-utils-types/persons';

@Injectable({
    providedIn: 'root',
})
export class TableService {
    persons: Person[] = getPersonsData();
    personsSubject: Subject<Person[]> = new Subject<Person[]>();

    selectedCheckboxCounter: number = 0;

    private searchFilterSubject: Subject<Person[]> = new Subject<Person[]>();
    private checkboxSubject: Subject<number> = new Subject<number>();

    searchFilterObservable$: Observable<Person[]> =
        this.searchFilterSubject.asObservable();
    checkboxObservable$: Observable<number> =
        this.checkboxSubject.asObservable();

    constructor() {}

    getPersons(): Observable<Person[]> {
        return this.personsSubject.asObservable();
    }

    filterPersons(searchTerm: string): Person[] {
        const filteredPersons: Person[] = this.persons.filter(
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

    toggleDropdownMenu(id: number): void {
        this.persons = this.persons.map((person) =>
            person.id === id
                ? { ...person, isDropdownOpened: !person.isDropdownOpened }
                : { ...person, isDropdownOpened: false },
        );
    }

    switchIsCheckboxChecked(id: number, isChecked: boolean): void {
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

    incrementCheckboxCounter(): void {
        this.selectedCheckboxCounter += 1;
    }

    decrementCheckboxCounter(): void {
        this.selectedCheckboxCounter -= 1;
    }

    handleCheckboxChange(): void {
        this.checkboxSubject.next(this.selectedCheckboxCounter);
    }

    handleSearchFilter(searchTerm: string): void {
        const filteredPersons: Person[] = this.filterPersons(searchTerm);

        this.searchFilterSubject.next(filteredPersons);
    }
}
