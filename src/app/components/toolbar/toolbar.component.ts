import { Component, OnInit } from '@angular/core';

import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { TableService } from 'src/app/services/table.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    faSearch: IconDefinition = faSearch;
    faPlus: IconDefinition = faPlus;

    constructor(private tableService: TableService) {}

    ngOnInit(): void {}

    onInputChange(e: Event): void {
        const searchTerm = (<HTMLInputElement>e.target).value.trim();

        this.tableService.handleSearchFilter(searchTerm);
    }
}
