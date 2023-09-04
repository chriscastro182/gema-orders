export class Family {
    _id: String;
    name: String;
    status: boolean;
    description: String;
}

export interface FamilyCard {
    Family: Family[];
}