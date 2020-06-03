using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WasteLESS.Models;

namespace WasteLESS.Services
{
    public class ItemRepo
    {
        private WasteLessContext _itemContext = new WasteLessContext();

        public void createItem(Item i)
        {

            _itemContext.Items.Add(i);
            _itemContext.SaveChanges();
        }

        public Item getItem(int id)
        {
            Item i = _itemContext.Items.Where(p => p.ItemId == id).FirstOrDefault();
            return i;
        }

        public IList<Item> getAllItems()
        {
            IList<Item> all_items = _itemContext.Items.ToList();
            return all_items;
        }

        public IList<Item> getAllItemsExpiring()
        {
            IList<Item> all_items = _itemContext.Items.Where(x => x.ExpirationDate == DateTime.Today.AddDays(1)).ToList();
            return all_items;
        }

        public int getItemsExpired()
        {
            int nr = _itemContext.Items.Count(x => x.ExpirationDate < DateTime.Today);
            return nr;
        }

        public int getItemsExpiredBeforeConsumption()
        {
            int nr = _itemContext.Items.Count(x => x.ExpirationDate < DateTime.Today && x.ConsumptionDate<x.ExpirationDate);
            return nr;
        }

        public int getItemsNr()
        {
            int nr = _itemContext.Items.Count();
            return nr;
        }

    }
}
