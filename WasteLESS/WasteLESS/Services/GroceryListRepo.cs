using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WasteLESS.Models;

namespace WasteLESS.Services
{
    public class GroceryListRepo
    {
        private WasteLessContext _groceryContext = new WasteLessContext();

        public void addGroceryList(GroceryList g)
        {
            _groceryContext.GroceryLists.Add(g);
            _groceryContext.SaveChanges();
        }

        public GroceryList getGroceryList(int id)
        {
            GroceryList g = _groceryContext.GroceryLists.Where(p => p.GroceryListId == id).FirstOrDefault();
            //g.GroceryListItems

            

            return g;
        }


        public List<Item> getItemsForList(int id)
        {

            List<Item> items = new List<Item>();
            var gLists = (from it in _groceryContext.Items
                          join gli in _groceryContext.GroceryListItems on it.ItemId equals gli.ItemId
                          where gli.GroceryListId == id
                          select new
                          {
                              it.ItemId,
                              it.ItemName,
                              it.Quantity,
                              it.Calories,
                              it.PurchaseDate,
                              it.ExpirationDate,
                              it.ConsumptionDate
                          }).ToList();

            foreach (var el in gLists)
            {
                Item it = new Item();
                it.ItemId = el.ItemId;
                it.ItemName = el.ItemName;
                it.Quantity = el.Quantity;
                it.Calories = el.Calories;
                it.PurchaseDate = el.PurchaseDate;
                it.ExpirationDate = el.ExpirationDate;
                it.ConsumptionDate = el.ConsumptionDate;
                items.Add(it);
            }

            return items;
        }

        public IList<GroceryList> getAllGroceryLists()
        {
            return _groceryContext.GroceryLists.ToList();
        }

        public void deleteGroceryList(int id)
        {
            GroceryList gdb = _groceryContext.GroceryLists.Where(p => p.GroceryListId == id).FirstOrDefault();
            _groceryContext.GroceryLists.Remove(gdb);
            _groceryContext.SaveChanges();
        }

        //public void addGroceryListItem(GroceryList g, Item i)
        //{
        //    GroceryListItem gi = new GroceryListItem();

        //    gi.GroceryList = g;
        //    gi.Item = i;
        //    _groceryContext.GroceryListItems.Add(gi);
        //    _groceryContext.SaveChanges();
        //}

        public void addGroceryListItem(int gID, int iID)
        {
            GroceryListItem gi = new GroceryListItem();

            gi.GroceryList = _groceryContext.GroceryLists.Where(g => g.GroceryListId == gID).FirstOrDefault();
            gi.Item = _groceryContext.Items.Where(m => m.ItemId == iID).FirstOrDefault();
            _groceryContext.GroceryListItems.Add(gi);
            _groceryContext.SaveChanges();
        }


    }
}
