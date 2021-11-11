import { linkedPatients1, linkedPatients2 } from './linkedPatients';
import {
    AllergyIntolerance,
    AllergyIntoleranceCategoryEnum,
    AllergyIntoleranceCriticalityEnum,
    AllergyIntoleranceTypeEnum,
} from '../../models/models';

export const mockAllergies: Array<AllergyIntolerance> = [
    {
        type: AllergyIntoleranceTypeEnum.Intolerance,
        category: [AllergyIntoleranceCategoryEnum.Food],
        criticality: AllergyIntoleranceCriticalityEnum.Low,
        code: {
            coding: [
                {
                    system: 'http://snomed.info/sct',
                    code: '3718001',
                    display: "Cow's Milk",
                },
            ],
            text: '',
            labels: {},
        },
    },
    {
        type: AllergyIntoleranceTypeEnum.Intolerance,
        category: [AllergyIntoleranceCategoryEnum.Medication],
        criticality: AllergyIntoleranceCriticalityEnum.Low,
        code: {
            coding: [
                {
                    system: 'http://snomed.info/sct',
                    code: '2001',
                    display: 'Trimethoprim',
                },
            ],
            text: 'Trimethoprim',
            labels: {},
        },
    },
    {
        type: AllergyIntoleranceTypeEnum.Allergy,
        category: [AllergyIntoleranceCategoryEnum.Environment],
        criticality: AllergyIntoleranceCriticalityEnum.High,
        code: {
            coding: [
                {
                    system: 'http://snomed.info/sct',
                    code: '3222',
                    display: 'Insects',
                },
            ],
            text: 'Insects',
            labels: {},
        },
    },
    {
        type: AllergyIntoleranceTypeEnum.Allergy,
        category: [AllergyIntoleranceCategoryEnum.Biologic],
        criticality: AllergyIntoleranceCriticalityEnum.High,
        code: {
            coding: [
                {
                    system: 'http://snomed.info/sct',
                    code: '4111',
                    display: 'Latex',
                },
            ],
            text: 'Latex',
            labels: {},
        },
    },
];

export const mapByIdentifierAllergyMap = new Map<string, AllergyIntolerance>();
mapByIdentifierAllergyMap.set('a0', mockAllergies[0]);
mapByIdentifierAllergyMap.set('a1', mockAllergies[1]);
mapByIdentifierAllergyMap.set('a2', mockAllergies[2]);
mapByIdentifierAllergyMap.set('a3', mockAllergies[3]);

export const patient1AllergyMap = new Map<string, AllergyIntolerance>();
patient1AllergyMap.set('a0', mockAllergies[0]);
patient1AllergyMap.set('a1', mockAllergies[1]);

export const patient2AllergyMap = new Map<string, AllergyIntolerance>();
patient2AllergyMap.set('a2', mockAllergies[2]);
patient2AllergyMap.set('a3', mockAllergies[3]);

export const mapByPatientIdentiferAllergyMap = new Map<
    string,
    Map<string, AllergyIntolerance>
>();
mapByPatientIdentiferAllergyMap.set(
    linkedPatients1.requested.id,
    patient1AllergyMap
);
mapByPatientIdentiferAllergyMap.set(
    linkedPatients2.requested.id,
    patient2AllergyMap
);
