using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace WasteLESS.Models
{
    public class GroceryList
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int GroceryListId { get; set; }
        public string GroceryListName { get; set; }
        public IList<GroceryListItem> GroceryListItems { get; set; }
    }
}
