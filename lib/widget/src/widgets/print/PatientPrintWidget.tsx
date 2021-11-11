import { FC } from 'react';

import styled from 'styled-components';

import { WidgetProps } from '../../types/base';
import { Identifier, IdentifierUseEnum, Patient } from '../../models/models';

const Container = styled.div`
    .pw-row {
        display: flex;

        .pw-row-label {
            margin-right: 10px;
        }
    }
`;

type Props = WidgetProps<null, null>;

export function getPatientPrimaryIdentifier(
    patient: Patient
): Identifier | undefined {
    return patient.identifier.filter(
        (id) => id.use === IdentifierUseEnum.Usual
    )[0];
}

export const PatientPrintWidget: FC<Props> = ({
    idSet: { linkedPatients },
}: Props) => {
    const patient = linkedPatients?.requested;
    const primaryIdentifier =
        patient != null ? getPatientPrimaryIdentifier(patient) : null;
    const name = patient?.name ?? null;

    const dob = patient?.birthDate != null ? patient?.birthDate : null;

    return patient != null ? (
        <Container className="patient-print">
            <h2>Patient Details</h2>
            <div className="pw-row">
                <div className="pw-row-label">Primary Identifier</div>
                <div>{primaryIdentifier?.value}</div>
            </div>

            <div className="pw-row">
                <div className="pw-row-label">Name</div>
                <div>
                    {name != null
                        ? `${name[0].family ?? ''}, ${
                              name[0].given[0].toLocaleUpperCase() ?? ''
                          }`
                        : null}
                </div>
            </div>

            <div className="pw-row">
                <div className="pw-row-label">DOB</div>
                <div>{dob}</div>
            </div>
            <br />
        </Container>
    ) : null;
};
