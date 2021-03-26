export class Quote {
    showDescription: boolean;
    constructor(public id:number, public saying: string, public personSubmitting: string){
        this.showDescription=false;
    }

}