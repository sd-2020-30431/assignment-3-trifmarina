using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WasteLESS.Models
{
    public class GroceryListItem
    {
        public int GroceryListId { get; set; }
        public GroceryList GroceryList { get; set; }
        public int ItemId { get; set; }
        public Item Item { get; set; }
    }
}
