import { Component, OnInit } from '@angular/core';

import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    faSearch: IconDefinition = faSearch;
    faPlus: IconDefinition = faPlus;

    constructor() {}

    ngOnInit(): void {}
}
