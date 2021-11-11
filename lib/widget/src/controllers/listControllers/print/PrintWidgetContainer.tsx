import { FC, PropsWithChildren } from 'react';

import styled from 'styled-components';

import { Size, SizingMethods } from '../../../types/base';
import { asQuantifiedUnitsString } from '../../../utilities';

export const DefaultPrintWidgetStyles = styled.div`
    .widget-title-big {
        font-size: 1.08rem;
        line-height: 1.17rem;
        font-weight: bold;
        margin: 0 0 5px;
        padding: 5px;

        &.boxed {
            border-bottom: 1px solid #dbdbdb;
            margin-bottom: 0;
        }
    }

    .widget-title {
        font-size: 0.92rem;
        line-height: 1rem;
        font-weight: bold;
        margin: 0;
        padding: 5px;
    }

    .widget-subtitle {
        font-size: 0.92rem;
        line-height: 1rem;
        font-weight: 600;
        margin: 0 0 5px;
    }

    .widget-kv-list {
        font-size: 0.92rem;
        line-height: 1rem;
        margin: 0 0 10px;
        padding-left: 25px;
    }

    .widget-kv-list-item {
        list-style-type: disclosure-closed;
    }

    .widget-kv-list-no-items {
        margin: 0;
        padding: 0 0 5px 5px;
        font-size: 0.92rem;
        line-height: 1rem;
    }

    dl {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        margin: 0;
        font-size: 0.92rem;
        line-height: 1rem;

        > .dl-row-item {
            flex: 1;
            padding: 0 5px 0 0;
            margin: 0;
            display: flex;
            border-bottom: 1px solid #dbdbdb;

            &.dob {
                flex: 0 0 125px;
            }

            &.age {
                flex: 0 0 50px;
            }

            &.arrival {
                flex: 0 0 160px;
            }
        }

        .dl-row-item-label {
            color: #000000;
            border-right: 1px solid #dbdbdb;
            padding: 4px;
            background: #efefef;
        }

        .dl-row-item-value {
            font-weight: 600;
            padding: 4px 8px;
            margin: 0;
        }

        &.stacked {
            flex-direction: column;
            flex-wrap: wrap;

            > .dl-row-item {
                max-height: 25px;
            }

            .dl-row-item-label {
                width: 50px;
            }
        }
    }

    .split-container {
        display: flex;

        > div {
            flex: 1 0 50%;
        }
    }

    .code-text {
        font-weight: 600;
    }
`;

export interface PrintWidgetContainerProps {
    width: Size;
    className: string;
}

export const PrintWidgetContainer: FC<PrintWidgetContainerProps> = ({
    width,
    className,
    children,
}: PropsWithChildren<PrintWidgetContainerProps>) => {
    // inline styles preferred here over styled components to keep things performant
    switch (width.method) {
        case SizingMethods.flex:
            return (
                <div
                    style={{
                        flexGrow: width.grow,
                        flexShrink: width.shrink,
                        flexBasis: asQuantifiedUnitsString(width.minSize),
                        minWidth: asQuantifiedUnitsString(width.minSize),
                        border: '1px solid #dbdbdb',
                        boxSizing: 'border-box',
                    }}
                    className={className}
                >
                    {children}
                </div>
            );
        case SizingMethods.units:
            return (
                <div
                    style={{
                        width: `${width.value}${width.unit}`,
                        border: '1px solid #dbdbdb',
                        boxSizing: 'border-box',
                    }}
                    className={className}
                >
                    {children}
                </div>
            );
        default:
            return <div className={className}>{children}</div>;
    }
};
