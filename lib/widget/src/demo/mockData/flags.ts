import { Flag } from '../../models/models'

export const mockFlags: Array<Flag> = [
    {
        category: {
            coding: [
                {
                    system: 'http://site.local/CodeSystem/flag-category',
                    code: 'ADMIN',
                },
            ],
            text: 'Isolation',
            labels: {},
        },
        code: {
            coding: [
                {
                    system: 'http://site.local/CodeSystem/flag-code',
                    code: 'AIRBORNE',
                },
            ],
            text: 'Airborne',
            labels: {},
        },
        id: '51d9fd9d-3919-5cc0-b8df-fe819e99c09b',
    },
    {
        category: {
            coding: [
                {
                    system: 'http://site.local/CodeSystem/flag-category',
                    code: 'ISOLATION',
                },
            ],
            text: 'Isolation',
            labels: {},
        },
        code: {
            coding: [
                {
                    system: 'http://site.local/CodeSystem/flag-code',
                    code: '840539006',
                },
            ],
            text: 'Suspected COVID',
            labels: {},
        },
        id: '8ffaa619-c146-56ad-b0e2-ded44cb6b474',
    },
]
