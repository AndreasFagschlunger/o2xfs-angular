import { CdmType, ExchangeType, MoveItems, Position, RetractArea, RetractStackerActions, XfsServiceClass } from 'xfs';

export interface CdmCaps3 {

    serviceClass: XfsServiceClass;
    type: CdmType;
    maxDispenseItems: number;
    compound: boolean;
    shutter: boolean;
    shutterControl: boolean;
    retractAreas: RetractArea[];
    retractTransportActions: RetractStackerActions[];
    retractStackerActions: RetractStackerActions[];
    safeDoor: boolean;
    cashBox: boolean;
    intermediateStacker: boolean;
    itemsTakenSensor: boolean;
    positions: Position[];
    moveItems: MoveItems[];
    exchangeType: ExchangeType[];
    extra: object;

}
