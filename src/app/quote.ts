export class Quote {
    showDescription: boolean;
    constructor(public id:number, public saying: string, public author:string, public personSubmitting: string, public postingDate: Date){
        this.showDescription=false;
    }

}