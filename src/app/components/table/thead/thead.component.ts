import { Component, OnInit } from '@angular/core';

import { THEAD_ITEMS } from 'src/app/static-utils-types/static';

import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { TableService } from 'src/app/services/table.service';

@Component({
    selector: '[app-thead]',
    templateUrl: './thead.component.html',
    styleUrls: ['./thead.component.scss'],
})
export class TheadComponent implements OnInit {
    faPaperclip: IconDefinition = faPaperclip;
    THEAD_ITEMS: string[] = THEAD_ITEMS;

    selectedCheckboxCounter: number;

    constructor(private tableService: TableService) {}

    ngOnInit(): void {
        this.selectedCheckboxCounter =
            this.tableService.selectedCheckboxCounter;

        this.tableService.checkboxObservable$.subscribe((value) => {
            this.selectedCheckboxCounter = value;
        });
    }
}
