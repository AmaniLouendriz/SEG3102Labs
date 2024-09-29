// ceci represente un element que l'on ajoute, on lui attribut un id, ainsi qu'un nom
export class ItemEntry {
    public id:number;
    public name:string;

    constructor(id:number,name:string) {
        this.id = id;
        this.name = name;
    }
}
