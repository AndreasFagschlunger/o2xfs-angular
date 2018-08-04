export interface WfsResult {

    readonly requestId: number;
    readonly service: string;
    readonly timestamp: Date;
    readonly result: number;
    readonly commandCode: number;
    readonly eventId: number;
    readonly buffer: any;

}