import { Element } from "./interfaces/Element";

const Nitrogen: Element = {
    name: "Nitrogen",
    id: 1,
    image: require("./images/7nitrogen.png"),
    chemAbr: "N",
    atomicNum: 7,
    shown: false,
    left: 50,
    top: 50,
    fact: "Nitrogen is odorless, tasteless, and colorless.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Chlorine: Element = {
    name: "Chlorine",
    id: 2,
    image: require("./images/17 chlorine.png"),
    chemAbr: "Cl",
    atomicNum: 17,
    shown: false,
    left: 50,
    top: 50,
    fact: "Nitrogen is odorless, tasteless, and colorless.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Potassium: Element = {
    name: "Potassium",
    id: 3,
    image: require("./images/19 potassium.png"),
    chemAbr: "K",
    atomicNum: 19,
    shown: false,
    left: 50,
    top: 50,
    fact: "Potassium is the second lightest (least dense) metal after lithium.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Hydrogen: Element = {
    name: "Hydrogen",
    id: 4,
    image: require("./images/1 hydrogen.png"),
    chemAbr: "H",
    atomicNum: 1,
    shown: false,
    left: 50,
    top: 50,
    fact: "Hydrogen is the most abundant element.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Silver: Element = {
    name: "Silver",
    id: 5,
    image: require("./images/47 silver.png"),
    chemAbr: "Ag",
    atomicNum: 47,
    shown: false,
    left: 50,
    top: 50,
    fact: "Silver can make it rain.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Iodine: Element = {
    name: "Iodine",
    id: 6,
    image: require("./images/53 iodine.png"),
    chemAbr: "I",
    atomicNum: 53,
    shown: false,
    left: 50,
    top: 50,
    fact: "Iodine was used to make the first photographs.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Aluminum: Element = {
    name: "Aluminum",
    id: 7,
    image: require("./images/13 aluminum.png"),
    chemAbr: "Al",
    atomicNum: 13,
    shown: false,
    left: 50,
    top: 50,
    fact: "It doesn't rust.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Cadmium: Element = {
    name: "Cadmium",
    id: 8,
    image: require("./images/48 cadmium.png"),
    chemAbr: "Cd",
    atomicNum: 48,
    shown: false,
    left: 50,
    top: 50,
    fact: "Cadmium is used in many products, including batteries, plastics, and in cigarette smoke.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Tellurium: Element = {
    name: "Tellurium",
    id: 9,
    image: require("./images/52 tellurium.png"),
    chemAbr: "Te",
    atomicNum: 52,
    shown: false,
    left: 50,
    top: 50,
    fact: "Tellurium is one of the rarest elements on Earth, but plentiful in space.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Cesium: Element = {
    name: "Cesium",
    id: 10,
    image: require("./images/55 cesium.png"),
    chemAbr: "Cs",
    atomicNum: 55,
    shown: false,
    left: 50,
    top: 50,
    fact: "Cesium is incredibly accurate at timekeeping and is used in atomic clocks.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Fluorine: Element = {
    name: "Flourine",
    id: 11,
    image: require("./images/9 flourine.png"),
    chemAbr: "Fl",
    atomicNum: 9,
    shown: false,
    left: 50,
    top: 50,
    fact: " Fluorine is the only element which will shape compounds with noble gasses xenon, krypton, and radon.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Carbon: Element = {
    name: "Carbon",
    id: 12,
    image: require("./images/6 carbon.png"),
    chemAbr: "C",
    atomicNum: 6,
    shown: false,
    left: 50,
    top: 50,
    fact: "ALMOST A FIFTH OF YOUR BODY IS CARBON.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Oxygen: Element = {
    name: "Oxygen",
    id: 13,
    image: require("./images/8 oxygen.png"),
    chemAbr: "O",
    atomicNum: 8,
    shown: false,
    left: 50,
    top: 50,
    fact: "Oxygen makes up around 21% of the Earth's atmosphere.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Lithium: Element = {
    name: "Lithium",
    id: 14,
    image: require("./images/3 lithium.png"),
    chemAbr: "Li",
    atomicNum: 3,
    shown: false,
    left: 50,
    top: 50,
    fact: "Although it is a metal, it is soft enough to cut with a knife.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

const Silicon: Element = {
    name: "Silicon",
    id: 15,
    image: require("./images/14 silicon.png"),
    chemAbr: "Si",
    atomicNum: 14,
    shown: false,
    left: 50,
    top: 50,
    fact: "Silicon is widely used in computer chips and solar cells.",
    compounds: ["Ammonia", "Nitrate", "Nitrous Oxide"]
};

export const elements = [
    Nitrogen,
    Chlorine,
    Potassium,
    Hydrogen,
    Silver,
    Iodine,
    Aluminum,
    Cadmium,
    Tellurium,
    Cesium,
    Fluorine,
    Carbon,
    Oxygen,
    Lithium,
    Silicon
];
