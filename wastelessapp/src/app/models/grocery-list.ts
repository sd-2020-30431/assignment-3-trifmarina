export class GroceryList {
  public GroceryListId: number;
  public GroceryListName: string;

  constructor(glName:string, glId?:number) {
    this.GroceryListName = glName;
    if (glId){
      this.GroceryListId = glId;
    }
  }

}
