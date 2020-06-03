using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WasteLESS.Models
{
    public class GroceryModel
    {

        public GroceryList GrListObj { get; set; }
        public IEnumerable<Item> ItList { get; set; }
        
    }
}
