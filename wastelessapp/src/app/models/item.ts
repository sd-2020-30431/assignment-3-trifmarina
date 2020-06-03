export class Item {
  ItemId: number;
  ItemName: string;
  Quantity: number;
  Calories: number;
  PurchaseDate: string;
  ExpirationDate: string;
  ConsumptionDate: string;
  Ideal: number;

  constructor(iN:string,q:number,c:number,pD:string,eD:string,cD:string,ide?:number ) {
    this.ItemName = iN;
    this.Quantity = q;
    this.Calories = c;
    this.PurchaseDate = pD;
    this.ExpirationDate = eD;
    this.ConsumptionDate = cD;
    this.Ideal = ide;
  }

  // get ideal(): number{
  //   return this._ideal;
  // }
  //
  // set ideal(val: number){
  //   this._ideal = val;
  // }

}

