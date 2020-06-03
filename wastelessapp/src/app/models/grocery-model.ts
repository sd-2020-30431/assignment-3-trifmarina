import {GroceryList} from "./grocery-list";
import {Item} from "./item";

export class GroceryModel {
  GrListObj:GroceryList;
  ItList:any;

  constructor(gl:GroceryList,it:any) {
    this.GrListObj = new GroceryList(gl.GroceryListName,gl.GroceryListId);
    this.ItList = it;
  }
}
