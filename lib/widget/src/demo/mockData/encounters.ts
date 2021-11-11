import { Encounter, IdentifierUseEnum } from '../../models/models';

export const mockEncounters: ReadonlyArray<Encounter> = [
    {
        // resourceType: 'Encounter',
        // identifier: [
        //     {
        //         use: IdentifierUseEnum.Usual,
        //         type: {
        //             coding: [
        //                 {
        //                     system: 'http://hl7.org/fhir/identifier-type',
        //                     code: 'VN',
        //                 },
        //             ],
        //             text: 'Visit Number',
        //             labels: {},
        //         },
        //         value: '7365055',
        //     },
        //     {
        //         use: IdentifierUseEnum.Official,
        //         system: 'http://alcidion.com/miya/Encounter',
        //         value: '780f1943-8b05-5bfb-87fa-7655e279afb4',
        //     },
        // ],
        // status: EncounterStatusEnum.InProgress,
        // statusHistory: [],
        // class: {
        //     system: 'https://www.hl7.org/fhir/Encounter.schema.json#class',
        //     code: 'inpatient',
        //     display: 'inpatient',
        // },
        // classHistory: [],
        // type: [],
        // priority: {
        //     coding: [
        //         {
        //             system: 'http://alcidion.com/miya/ActPriority',
        //             code: '2',
        //             display: '2',
        //         },
        //     ],
        //     text: '2',
        //     labels: {},
        // },
        // subject: {
        //     identifier: {
        //         use: CrossModelIdentifierUseEnum.Official,
        //         system: 'http://alcidion.com/miya/Patient',
        //         value: 'd27ef7d5-d11f-51bb-9a75-ea3ec349c974',
        //     },
        // },
        // childEncounters: [],
        // episodeOfCare: [],
        // incomingReferral: [],
        // participant: [
        //     {
        //         type: {
        //             coding: [
        //                 {
        //                     system: 'http://hl7.org/fhir/v3/ParticipationType',
        //                     code: 'ATND',
        //                 },
        //             ],
        //             text: 'Attender',
        //             labels: {},
        //         },
        //         period: { start: '2020-12-15T12:57:38+10:30' },
        //         individual: { reference: '#Attender-123456' },
        //         individualStaff: {
        //             resourceType: 'Practitioner',
        //             identifier: {
        //                 use: IdentifierUseEnum.Official,
        //                 type: {
        //                     coding: [
        //                         {
        //                             system: 'http://hl7.org/fhir/v2/0203',
        //                             code: 'EN',
        //                             display: 'Employer number',
        //                         },
        //                     ],
        //                     text: 'Employer number',
        //                     labels: {},
        //                 },
        //                 value: '123456',
        //             },
        //             name: {
        //                 use: HumanNameUseEnum.Official,
        //                 text: 'John Smith',
        //                 family: 'Smith',
        //                 given: ['John'],
        //                 prefix: ['Dr'],
        //                 suffix: [],
        //             },
        //             telecom: [
        //                 {
        //                     system: ContactPointSystemEnum.Phone,
        //                     value: '0469 999 999',
        //                     use: ContactPointUseEnum.Mobile,
        //                     rank: 1,
        //                 },
        //                 {
        //                     system: ContactPointSystemEnum.Phone,
        //                     value: '08 987 654',
        //                     use: ContactPointUseEnum.Work,
        //                     rank: 1,
        //                 },
        //                 {
        //                     system: ContactPointSystemEnum.Phone,
        //                     value: '08 123456',
        //                     use: ContactPointUseEnum.Home,
        //                     rank: 1,
        //                 },
        //             ],
        //             address: [
        //                 {
        //                     use: AddressUseEnum.Work,
        //                     type: AddressTypeEnum.Physical,
        //                     line: ['40 Greenhill Road'],
        //                     city: 'Wayville',
        //                     state: 'SA',
        //                     postalCode: '5034',
        //                     country: 'Australia',
        //                 },
        //             ],
        //             photo: [],
        //             qualification: [],
        //             communication: [],
        //             id: 'Attender-123456',
        //             revision: 0,
        //         },
        //     },
        // ],
        // appointment: {
        //     identifier: {
        //         use: CrossModelIdentifierUseEnum.Official,
        //         system: 'http://alcidion.com/miya/Appointment',
        //         value: '5a8baeef-5cac-5d80-91f0-592acbee3ec9',
        //     },
        // },
        // period: { start: '2020-12-15T12:57:38+10:30' },
        // reason: [],
        // diagnosis: [],
        // account: [],
        // location: [
        //     {
        //         location: {
        //             identifier: {
        //                 use: CrossModelIdentifierUseEnum.Official,
        //                 system: 'http://alcidion.com/miya/Location',
        //                 value: '3391c760-cec3-4239-be8a-ef85a1e43c1d',
        //             },
        //         },
        //         status: EncounterLocationStatusEnum.Active,
        //     },
        //     {
        //         location: {
        //             identifier: {
        //                 use: CrossModelIdentifierUseEnum.Official,
        //                 system: 'http://alcidion.com/miya/Location',
        //                 value: 'ceae97fa-1d59-4edb-8f82-3556ab211d0d',
        //             },
        //         },
        //         status: EncounterLocationStatusEnum.Active,
        //     },
        //     {
        //         location: {
        //             identifier: {
        //                 use: CrossModelIdentifierUseEnum.Official,
        //                 system: 'http://alcidion.com/miya/Location',
        //                 value: '862d81fd-c031-4968-b842-05f457b24eb0',
        //             },
        //         },
        //         status: EncounterLocationStatusEnum.Active,
        //     },
        // ],
        // serviceProvider: {
        //     identifier: {
        //         use: CrossModelIdentifierUseEnum.Official,
        //         system: 'http://alcidion.com/miya/Organisation',
        //         value: 'e9af311d-fa69-40fa-a405-88db07a1f1a8',
        //     },
        // },
        // isLocationOutlier: true,
        // firstSeen: [],
        // dischargeEstimation: [
        //     {
        //         type: {
        //             coding: [
        //                 {
        //                     system: 'http://alcidion.com/miya/discharge-estimate-type',
        //                     code: 'Feed',
        //                     display: 'Feed',
        //                 },
        //             ],
        //             text: 'Feed',
        //             labels: {},
        //         },
        //         estimatedDateTime: '2020-12-16T12:57:38+10:30',
        //         setDateTime: '2020-12-15T12:57:38+10:30',
        //         isActive: true,
        //     },
        // ],
        id: '780f1943-8b05-5bfb-87fa-7655e279afb4',
        // meta: {
        //     versionId: '1',
        //     lastUpdated: '2020-12-15T12:57:38+10:30',
        //     profile: ['Encounter'],
        //     security: [],
        //     tag: [{ system: 'HL7', version: '2.7', code: 'A01' }],
        // },
        // revision: 1,
    },
    {
        // resourceType: 'Encounter',
        // identifier: [
        //     {
        //         use: IdentifierUseEnum.Usual,
        //         type: {
        //             coding: [
        //                 {
        //                     system: 'http://hl7.org/fhir/identifier-type',
        //                     code: 'VN',
        //                 },
        //             ],
        //             text: 'Visit Number',
        //             labels: {},
        //         },
        //         value: '2b6f59c7',
        //     },
        //     {
        //         use: IdentifierUseEnum.Official,
        //         system: 'http://alcidion.com/miya/Encounter',
        //         value: '055f2e51-89e5-5acf-98c5-fc3cc1c00070',
        //     },
        // ],
        // status: EncounterStatusEnum.InProgress,
        // statusHistory: [],
        // class: {
        //     system: 'https://www.hl7.org/fhir/Encounter.schema.json#class',
        //     code: 'inpatient',
        //     display: 'inpatient',
        // },
        // classHistory: [],
        // type: [],
        // priority: {
        //     coding: [
        //         {
        //             system: 'http://alcidion.com/miya/ActPriority',
        //             code: '2',
        //             display: '2',
        //         },
        //     ],
        //     text: '2',
        //     labels: {},
        // },
        // subject: {
        //     identifier: {
        //         use: CrossModelIdentifierUseEnum.Official,
        //         system: 'http://alcidion.com/miya/Patient',
        //         value: 'd6257db0-b278-5575-999e-7dfb564be54d',
        //     },
        // },
        // childEncounters: [],
        // episodeOfCare: [],
        // incomingReferral: [],
        // participant: [
        //     {
        //         type: {
        //             coding: [
        //                 {
        //                     system: 'http://hl7.org/fhir/v3/ParticipationType',
        //                     code: 'ATND',
        //                 },
        //             ],
        //             text: 'Attender',
        //             labels: {},
        //         },
        //         period: { start: '2020-12-14T10:00:00+10:30' },
        //         individual: { reference: '#Attender-123456' },
        //         individualStaff: {
        //             resourceType: 'Practitioner',
        //             identifier: {
        //                 use: IdentifierUseEnum.Official,
        //                 type: {
        //                     coding: [
        //                         {
        //                             system: 'http://hl7.org/fhir/v2/0203',
        //                             code: 'EN',
        //                             display: 'Employer number',
        //                         },
        //                     ],
        //                     text: 'Employer number',
        //                     labels: {},
        //                 },
        //                 value: '123456',
        //             },
        //             name: {
        //                 use: HumanNameUseEnum.Official,
        //                 text: 'John Smith',
        //                 family: 'Smith',
        //                 given: ['John'],
        //                 prefix: ['Dr'],
        //                 suffix: [],
        //             },
        //             telecom: [
        //                 {
        //                     system: ContactPointSystemEnum.Phone,
        //                     value: '0469 999 999',
        //                     use: ContactPointUseEnum.Mobile,
        //                     rank: 1,
        //                 },
        //                 {
        //                     system: ContactPointSystemEnum.Phone,
        //                     value: '08 987 654',
        //                     use: ContactPointUseEnum.Work,
        //                     rank: 1,
        //                 },
        //                 {
        //                     system: ContactPointSystemEnum.Phone,
        //                     value: '08 123456',
        //                     use: ContactPointUseEnum.Home,
        //                     rank: 1,
        //                 },
        //             ],
        //             address: [
        //                 {
        //                     use: AddressUseEnum.Work,
        //                     type: AddressTypeEnum.Physical,
        //                     line: ['40 Greenhill Road'],
        //                     city: 'Wayville',
        //                     state: 'SA',
        //                     postalCode: '5034',
        //                     country: 'Australia',
        //                 },
        //             ],
        //             photo: [],
        //             qualification: [],
        //             communication: [],
        //             id: 'Attender-123456',
        //             revision: 0,
        //         },
        //     },
        // ],
        // appointment: {
        //     identifier: {
        //         use: CrossModelIdentifierUseEnum.Official,
        //         system: 'http://alcidion.com/miya/Appointment',
        //         value: '36f96b20-3ec0-5d28-849e-28433050b5fc',
        //     },
        // },
        // period: { start: '2020-12-14T10:00:00+10:30' },
        // reason: [],
        // diagnosis: [],
        // account: [],
        // location: [
        //     {
        //         location: {
        //             identifier: {
        //                 use: CrossModelIdentifierUseEnum.Official,
        //                 system: 'http://alcidion.com/miya/Location',
        //                 value: 'c4305306-b61d-4f93-b301-954c108236dd',
        //             },
        //         },
        //         status: EncounterLocationStatusEnum.Active,
        //     },
        //     {
        //         location: {
        //             identifier: {
        //                 use: CrossModelIdentifierUseEnum.Official,
        //                 system: 'http://alcidion.com/miya/Location',
        //                 value: '4c62c891-415d-48ab-9fa6-29f608b06db9',
        //             },
        //         },
        //         status: EncounterLocationStatusEnum.Active,
        //     },
        //     {
        //         location: {
        //             identifier: {
        //                 use: CrossModelIdentifierUseEnum.Official,
        //                 system: 'http://alcidion.com/miya/Location',
        //                 value: '0740f92d-cf05-445b-9567-d999877f6d39',
        //             },
        //         },
        //         status: EncounterLocationStatusEnum.Active,
        //     },
        // ],
        // serviceProvider: {
        //     identifier: {
        //         use: CrossModelIdentifierUseEnum.Official,
        //         system: 'http://alcidion.com/miya/Organisation',
        //         value: '8763e00e-974c-479f-9af4-9d4e78f11f68',
        //     },
        // },
        // isLocationOutlier: false,
        // firstSeen: [],
        // dischargeEstimation: [
        //     {
        //         type: {
        //             coding: [
        //                 {
        //                     system: 'http://alcidion.com/miya/discharge-estimate-type',
        //                     code: 'Feed',
        //                     display: 'Feed',
        //                 },
        //             ],
        //             text: 'Feed',
        //             labels: {},
        //         },
        //         estimatedDateTime: '2020-12-15T14:18:35+10:30',
        //         setDateTime: '2020-12-14T14:18:35+10:30',
        //         isActive: true,
        //     },
        // ],
        id: '055f2e51-89e5-5acf-98c5-fc3cc1c00070',
        // meta: {
        //     versionId: '1',
        //     lastUpdated: '2020-12-14T14:18:35+10:30',
        //     profile: ['Encounter'],
        //     security: [],
        //     tag: [{ system: 'HL7', version: '2.7', code: 'A01' }],
        // },
        // revision: 1,
    },
];
