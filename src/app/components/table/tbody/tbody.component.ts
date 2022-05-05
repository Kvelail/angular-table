import { Component, OnInit } from '@angular/core';

import { Person } from 'src/app/static-utils-types/types';

import {
    faCloud,
    faPaperclip,
    faFileLines,
    faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: '[app-tbody]',
    templateUrl: './tbody.component.html',
    styleUrls: ['./tbody.component.scss'],
})
export class TbodyComponent implements OnInit {
    persons: Person[] = [
        {
            id: 1,
            name: 'Olivia Smith',
            img: '/assets/persons-img/Person1.jpeg',
            phone: '(321) 321-2232',
            ssn: '333-33-3333',
            dob: '31/01/83',
            hired: '02/01/22',
            cdl: '987654321',
            cdl_exp: 3,
            med_exp: 33,
            mvr_exp: 333,
            isChecked: false,
            isDropdownOpened: false,
        },
    ];

    faCloud: IconDefinition = faCloud;
    faPaperclip: IconDefinition = faPaperclip;
    faFileLines: IconDefinition = faFileLines;
    faEllipsis: IconDefinition = faEllipsis;

    constructor() {}

    ngOnInit(): void {}
}
