export interface Element {
    name: string;
    id: number;
    image: string;
    chemAbr: string;
    atomicNum: number;
    neededforCompound?: [key: string, value: string];
    shown: boolean;
    top: number;
    left: number;
    fact: string;
}
