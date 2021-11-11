import { DomainData } from '../../types/base';
import { linkedPatients1, linkedPatients2 } from './linkedPatients';
import { mockEncounters } from './encounters';
import {
    mapByIdentifierAllergyMap,
    mapByPatientIdentiferAllergyMap,
} from './allergies';
import { mockFlags } from './flags';

export const mockDomainData: DomainData = {
    patientList: {
        indexByOwnId: {
            [linkedPatients1.requested.id]: linkedPatients1.requested,
            [linkedPatients2.requested.id]: linkedPatients2.requested,
        },
    },
    encounterList: {
        indexByOwnId: {
            '780f1943-8b05-5bfb-87fa-7655e279afb4': mockEncounters[0],
            '055f2e51-89e5-5acf-98c5-fc3cc1c00070': mockEncounters[1],
        },
        indexByPatientIdentifier: {},
        indexOpenEncounterByPatientIdentifier: {},
    },
    allergyIntoleranceList: {
        mapByIdentifier: mapByIdentifierAllergyMap,
        mapByPatientIdentifier: mapByPatientIdentiferAllergyMap,
    },
    flagList: {
        indexByOwnId: { 1: mockFlags[0], 2: mockFlags[1] },
        indexByPatientId: {
            [linkedPatients1.requested.id]: ['1'],
            [linkedPatients2.requested.id]: ['2'],
        },
        indexByEncounterId: {
            '780f1943-8b05-5bfb-87fa-7655e279afb4': ['1'],
            '055f2e51-89e5-5acf-98c5-fc3cc1c00070': ['2'],
        },
    },
};
