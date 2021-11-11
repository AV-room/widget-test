import { FC } from 'react';

import styled from 'styled-components';

import { WidgetProps } from '../../types/base';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`;

type Props = WidgetProps<null, null>;

export const PatientDashboardWidget: FC<Props> = ({
    idSet: { linkedPatients },
}: Props) => {
    const patient = linkedPatients?.requested;

    const patientName = patient?.name ?? null;

    return patient != null ? (
        <Container className="patient-dashboard">
            <span>{patientName != null ? patientName[0].given[0] : ''}</span>
        </Container>
    ) : null;
};
