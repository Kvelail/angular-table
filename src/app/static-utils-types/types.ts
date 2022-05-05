import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Person {
    id: number;
    name: string;
    img: string;
    phone: string;
    ssn: string;
    dob: string;
    hired: string;
    cdl: string;
    cdl_exp: number;
    med_exp: number;
    mvr_exp: number;
    isChecked: boolean;
    isDropdownOpened: boolean;
}

export interface DropdownMenuItems {
    icon: IconDefinition;
    text: string;
}
