export interface Element {
    name: string;
    id: number;
    image: string;
    chemAbr: string;
    atomicNum: number;
    neededforCompound?: { [key: string]: string };
    shown: boolean;
    top: number;
    left: number;
    fact: string;
    compounds: string[];
}
