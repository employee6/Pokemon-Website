export interface Pokemon {
    name : string,
    base_experience: number;
    stats: [{
        hp:number,
        attack:number,
        defense:number,
        special_attack:number,
        special_defense:number,
        speed:number
    }];
    sprites : [{
        front_default: string
    }]
}