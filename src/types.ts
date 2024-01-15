export interface Compendium {
    item:  Item[];
    version: string;
}

export interface Class {
    name:         string;
    hd:           number;
    proficiency:  string;
    spellAbility: SpellAbility;
    numSkills:    number;
    armor:        string;
    weapons:      string;
    tools:        string;
    wealth:       string;
    autolevel:    Autolevel[];
}

export interface Autolevel {
    feature?: FeatureElement[] | PurpleFeature;
    counter?: CounterElement[] | CounterElement;
    slots?:   string;
    "#text"?: string;
}

export interface CounterElement {
    name:  string;
    value: number;
    reset: Reset;
}

export enum Reset {
    L = "L",
    S = "S",
}

export interface FeatureElement {
    name: string;
    text: string[];
}

export interface PurpleFeature {
    name:         string;
    text:         string[];
    special?:     string;
    modifier?:    string[] | string;
    proficiency?: string;
}

export enum SpellAbility {
    Charisma = "Charisma",
    Constitution = "Constitution",
    Dexterity = "Dexterity",
    Empty = "",
    Intelligence = "Intelligence",
    Wisdom = "Wisdom",
}

export interface Item {
    name:      string;
    type:      Type;
    weight?:   number | string;
    text:      string[];
    value?:    number | string;
    roll?:     string[] | string;
    ac?:       number;
    strength?: number | string;
    stealth?:  MagicEnum | number;
    dmg1?:     Dmg | number;
    dmg2?:     Dmg;
    dmgType?:  DmgType;
    property?: string;
    range?:    Range;
    magic?:    MagicEnum | number;
    detail?:   string;
    modifier?: string[] | string;
    sources?: string[];
}

export enum Dmg {
    Empty = "",
    The1D10 = "1d10",
    The1D12 = "1d12",
    The1D4 = "1d4",
    The1D6 = "1d6",
    The1D8 = "1d8",
    The2D12 = "2d12",
    The2D4 = "2d4",
    The2D6 = "2d6",
    The2D8 = "2d8",
    The3D12 = "3d12",
}

export enum DmgType {
    Bludgeoning = "B",
    Empty = "",
    Necrotic = "N",
    Piercing = "P",
    Slashing = "S",
}

export enum MagicEnum {
    Empty = "",
    Yes = "YES",
}

export enum Range {
    Empty = "",
    The100300 = "100/300",
    The100400 = "100/400",
    The1030 = "10/30",
    The120480 = "120/480",
    The150600 = "150/600",
    The1560 = "15/60",
    The200800 = "200/800",
    The2060 = "20/60",
    The25100 = "25/100",
    The30120 = "30/120",
    The3060 = "30/60",
    The3090 = "30/90",
    The40120 = "40/120",
    The40160 = "40/160",
    The5090 = "50/90",
    The515 = "5/15",
    The60120 = "60/120",
    The60150 = "60/150",
    The60180 = "60/180",
    The60240 = "60/240",
    The80320 = "80/320",
}

export enum Type {
    Ammunition = "A",
    CurrencyAndValuables = "$",
    General = "G",
    HeavyArmor = "HA",
    LightArmor = "LA",
    Melee = "M",
    MediumArmor = "MA",
    Potions = "P",
    Ranged = "R",
    Rods = "RD",
    Rings = "RG",
    Shields = "S",
    Scrolls = "SC",
    Staves = "ST",
    Wonderous = "W",
    Wand = "WD"
}

export interface Race {
    name:         string;
    size:         Type;
    speed:        number;
    ability:      string;
    spellAbility: SpellAbility;
    proficiency:  Proficiency;
    trait:        Trait[];
}

export enum Proficiency {
    Athletics = "Athletics",
    AthleticsPerception = "Athletics, Perception",
    Empty = "",
    Intimidation = "Intimidation",
    Perception = "Perception",
    PerceptionStealth = "Perception, Stealth",
    PerformancePersuasion = "Performance, Persuasion",
    Persuasion = "Persuasion",
    Stealth = "Stealth",
}

export interface Trait {
    name:      string;
    text:      string[] | string;
    modifier?: string;
    special?:  string;
}
