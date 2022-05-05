import { Component, OnInit } from '@angular/core';

import { DROPDOWN_MENU_ITEMS } from 'src/app/static-utils-types/static';

import { Person, DropdownMenuItems } from 'src/app/static-utils-types/types';

import {
    faCloud,
    faPaperclip,
    faFileLines,
    faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { TableService } from 'src/app/services/table.service';

@Component({
    selector: '[app-tbody]',
    templateUrl: './tbody.component.html',
    styleUrls: ['./tbody.component.scss'],
})
export class TbodyComponent implements OnInit {
    persons: Person[] = [];

    DROPDOWN_MENU_ITEMS: DropdownMenuItems[] = DROPDOWN_MENU_ITEMS;

    faCloud: IconDefinition = faCloud;
    faPaperclip: IconDefinition = faPaperclip;
    faFileLines: IconDefinition = faFileLines;
    faEllipsis: IconDefinition = faEllipsis;

    constructor(private tableService: TableService) {}

    ngOnInit(): void {
        this.tableService
            .getPersons()
            .subscribe((value) => (this.persons = value));

        this.tableService.personsSubject.next(this.tableService.persons);

        this.tableService.searchFilterObservable$.subscribe((value) => {
            this.persons = value;
        });
    }

    onDropdownClick(id: number): void {
        this.tableService.toggleDropdownMenu(id);

        this.tableService
            .getPersons()
            .subscribe((value) => (this.persons = value));

        this.tableService.personsSubject.next(this.tableService.persons);
    }

    onCheckboxChange(id: number, e: Event): void {
        const isChecked = (<HTMLInputElement>e.target).checked;

        this.tableService.switchIsCheckboxChecked(id, isChecked);

        this.tableService.handleCheckboxChange();

        this.tableService
            .getPersons()
            .subscribe((value) => (this.persons = value));

        this.tableService.personsSubject.next(this.tableService.persons);
    }
}
