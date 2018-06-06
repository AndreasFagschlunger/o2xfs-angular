import { Position, PositionStatus, Shutter, Transport, TransportStatus } from 'xfs';

export interface OutputPosition3 {

    position: Position;
    shutter: Shutter;
    positionStatus: PositionStatus;
    transport: Transport;
    transportStatus: TransportStatus;

}
