import { Person } from './types';

import { getRandomInt } from './utils';

export const PERSONS: Person[] = [
    {
        id: 1,
        name: 'Angela Throtter',
        img: '/assets/persons-img/Person1.jpeg',
        phone: '(121) 321-2232',
        ssn: '111-11-1111',
        dob: '12/06/84',
        hired: '02/01/22',
        cdl: '987654321',
        cdl_exp: 1,
        med_exp: 11,
        mvr_exp: 111,
        isChecked: false,
        isDropdownOpened: false,
    },
    {
        id: 2,
        name: 'Erica Reid',
        img: '/assets/persons-img/Person2.jpg',
        phone: '(221) 321-2232',
        ssn: '222-22-2222',
        dob: '31/01/83',
        hired: '02/01/22',
        cdl: '987654321',
        cdl_exp: 2,
        med_exp: 22,
        mvr_exp: 222,
        isChecked: false,
        isDropdownOpened: false,
    },
    {
        id: 3,
        name: 'Olivia Smith',
        img: '/assets/persons-img/Person3.jpg',
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
    {
        id: 4,
        name: 'Isaac Douglas',
        img: '/assets/persons-img/Person4.jpg',
        phone: '(421) 321-2232',
        ssn: '444-44-4444',
        dob: '31/01/83',
        hired: '02/01/22',
        cdl: '987654321',
        cdl_exp: 4,
        med_exp: 44,
        mvr_exp: 444,
        isChecked: false,
        isDropdownOpened: false,
    },
    {
        id: 5,
        name: 'Glen Cotton',
        img: '/assets/persons-img/Person5.jpg',
        phone: '(521) 321-2232',
        ssn: '555-55-5555',
        dob: '31/01/83',
        hired: '02/01/22',
        cdl: '987654321',
        cdl_exp: 5,
        med_exp: 55,
        mvr_exp: 555,
        isChecked: false,
        isDropdownOpened: false,
    },
    {
        id: 6,
        name: 'Darryl Talbert',
        img: '/assets/persons-img/Person6.jpg',
        phone: '(621) 321-2232',
        ssn: '666-66-6666',
        dob: '31/01/83',
        hired: '02/01/22',
        cdl: '987654321',
        cdl_exp: 6,
        med_exp: 66,
        mvr_exp: 666,
        isChecked: false,
        isDropdownOpened: false,
    },
];

const PERSONS_COUNT = 1000;

export const getPersonsData = () => {
    let i = 0;
    const duplicatedPersonsArr = [];

    while (i < PERSONS_COUNT) {
        duplicatedPersonsArr.push(PERSONS[getRandomInt(PERSONS.length)]);
        i++;
    }

    return duplicatedPersonsArr;
};
