import {
    HumanNameUseEnum,
    IdentifierUseEnum,
    LinkedPatients,
} from '../../models/models';

export const mockLinkedPatients = (
    givenName?: string,
    identifier?: string
): LinkedPatients => ({
    requested: {
        identifier: [
            {
                use: IdentifierUseEnum.Usual,
                type: {
                    coding: [
                        {
                            system: 'http://hl7.org/fhir/identifier-type',
                            code: 'NHI',
                        },
                    ],
                    text: 'NHI',
                    labels: {},
                },
                value: '04ac0863',
            },
            {
                use: IdentifierUseEnum.Secondary,
                type: {
                    coding: [
                        { system: 'http://hl7.org/fhir/v2/0203', code: 'MC' },
                    ],
                    text: 'Medicare Card No',
                    labels: {},
                },
                value: '30763740378 1',
            },
            {
                use: IdentifierUseEnum.Secondary,
                type: {
                    coding: [
                        { system: 'http://hl7.org/fhir/v2/0203', code: 'A&E' },
                    ],
                    text: 'A&E Identifier',
                    labels: {},
                },
                value: '30763740378 1',
            },
            {
                use: IdentifierUseEnum.Secondary,
                type: {
                    coding: [
                        { system: 'http://hl7.org/fhir/v2/0203', code: 'PN' },
                    ],
                    text: 'Pensioner Number',
                    labels: {},
                },
                value: '30763740378 1',
            },
            {
                use: IdentifierUseEnum.Secondary,
                type: {
                    coding: [
                        { system: 'http://hl7.org/fhir/v2/0203', code: 'MAC' },
                    ],
                    text: 'My Age Care',
                    labels: {},
                },
                value: '30763740378 1',
            },
            {
                use: IdentifierUseEnum.Official,
                system: 'http://alcidion.com/miya/Patient',
                value: '5da68007-f361-5e39-998d-de5b79c5e2a2',
            },
        ],
        primaryIdentifier: {
            use: IdentifierUseEnum.Usual,
            type: {
                coding: [
                    {
                        system: 'http://hl7.org/fhir/identifier-type',
                        code: 'NHI',
                    },
                ],
                text: 'NHI',
                labels: {},
            },
            value: '04ac0863',
        },
        name: [
            {
                use: HumanNameUseEnum.Official,
                text: 'Raymond Standley',
                family: 'Standley',
                given: [givenName ?? 'Raymond'],
                prefix: [],
                suffix: [],
            },
        ],
        birthDate: '1980-03-11',
        id: identifier ?? '5da68007-f361-5e39-998d-de5b79c5e2a2',
    },
    primary: {
        identifier: [
            {
                use: IdentifierUseEnum.Usual,
                type: {
                    coding: [
                        {
                            system: 'http://hl7.org/fhir/identifier-type',
                            code: 'NHI',
                        },
                    ],
                    text: 'NHI',
                    labels: {},
                },
                value: '04ac0863',
            },
            {
                use: IdentifierUseEnum.Secondary,
                type: {
                    coding: [
                        { system: 'http://hl7.org/fhir/v2/0203', code: 'MC' },
                    ],
                    text: 'Medicare Card No',
                    labels: {},
                },
                value: '30763740378 1',
            },
            {
                use: IdentifierUseEnum.Secondary,
                type: {
                    coding: [
                        { system: 'http://hl7.org/fhir/v2/0203', code: 'A&E' },
                    ],
                    text: 'A&E Identifier',
                    labels: {},
                },
                value: '30763740378 1',
            },
            {
                use: IdentifierUseEnum.Secondary,
                type: {
                    coding: [
                        { system: 'http://hl7.org/fhir/v2/0203', code: 'PN' },
                    ],
                    text: 'Pensioner Number',
                    labels: {},
                },
                value: '30763740378 1',
            },
            {
                use: IdentifierUseEnum.Secondary,
                type: {
                    coding: [
                        { system: 'http://hl7.org/fhir/v2/0203', code: 'MAC' },
                    ],
                    text: 'My Age Care',
                    labels: {},
                },
                value: '30763740378 1',
            },
            {
                use: IdentifierUseEnum.Official,
                system: 'http://alcidion.com/miya/Patient',
                value: '5da68007-f361-5e39-998d-de5b79c5e2a2',
            },
        ],
        primaryIdentifier: {
            use: IdentifierUseEnum.Usual,
            type: {
                coding: [
                    {
                        system: 'http://hl7.org/fhir/identifier-type',
                        code: 'NHI',
                    },
                ],
                text: 'NHI',
                labels: {},
            },
            value: '04ac0863',
        },
        name: [
            {
                use: HumanNameUseEnum.Official,
                text: 'Raymond Standley',
                family: 'Standley',
                given: [givenName ?? 'Raymond'],
                prefix: [],
                suffix: [],
            },
        ],
        birthDate: '1980-03-11',
        id: identifier ?? '5da68007-f361-5e39-998d-de5b79c5e2a2',
    },
    linked: [],
});

export const linkedPatients1 = mockLinkedPatients('Peter', '11111');
export const linkedPatients2 = mockLinkedPatients('Sue', '22222');
