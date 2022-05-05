import {
    faPen,
    faPlus,
    faPowerOff,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';

import { DropdownMenuItems } from './types';

export const THEAD_ITEMS: string[] = [
    'Name',
    'Phone',
    'SSN',
    'DOB',
    'Hired',
    'CDL #',
    'State',
    'CDL exp.',
    'Medical exp.',
    'MVR exp.',
];

export const DROPDOWN_MENU_ITEMS: DropdownMenuItems[] = [
    { icon: faPen, text: 'Edit' },
    { icon: faPlus, text: 'Add CDL' },
    { icon: faPlus, text: 'Add Medical' },
    { icon: faPlus, text: 'Add MVR' },
    { icon: faPlus, text: 'Add Test' },
    { icon: faPowerOff, text: 'Deactivate' },
    { icon: faTrash, text: 'Delete' },
];
