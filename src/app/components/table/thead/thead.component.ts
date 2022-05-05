import { Component, OnInit } from '@angular/core';

import { THEAD_ITEMS } from 'src/app/static-utils-types/static';

import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: '[app-thead]',
    templateUrl: './thead.component.html',
    styleUrls: ['./thead.component.scss'],
})
export class TheadComponent implements OnInit {
    faPaperclip: IconDefinition = faPaperclip;
    THEAD_ITEMS: string[] = THEAD_ITEMS;

    constructor() {}

    ngOnInit(): void {}
}
