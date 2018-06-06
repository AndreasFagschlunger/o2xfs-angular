import { MixRow3 } from './mix-row3.model';

export interface MixTable3 {

    mixNumber: number;
    name: string;
    rows: number;
    cols: number;
    mixHeader: number[];
    mixRows: MixRow3[];

}
