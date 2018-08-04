export class GetInfoRequest {

    readonly logicalName: string;
    readonly category: number;
    readonly queryDetails?: any;
    readonly timeOut: number = 0;

    constructor(logicalName: string, category: number, init?: {
        queryDetails?: any,
        timeOut?: number;
    }) {
        this.logicalName = logicalName;
        this.category = category;
        if(init) {
            if(init.queryDetails) {
                this.queryDetails = this.queryDetails;
            }
            if(this.timeOut) {
                this.timeOut = this.timeOut;
            }
        }
        
    }
}