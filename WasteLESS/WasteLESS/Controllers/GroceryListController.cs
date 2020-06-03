using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WasteLESS.Services;
using WasteLESS.Models;

namespace WasteLESS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroceryListController : ControllerBase
    {
        private GroceryListRepo _groceryRepository = new GroceryListRepo();

       // GET: api/GroceryList
        [HttpGet]
        [Route("GetAllLists")]
        public IEnumerable<GroceryList> GetAll()
        {
            return _groceryRepository.getAllGroceryLists();
        }

        // GET: api/GroceryList/5
        //[HttpGet("{id}", Name = "Get")]
        //public GroceryList Get(int id)
        //{
        //    return _groceryRepository.getGroceryList(id);
        //}













        // POST: api/GroceryList
        [HttpPost]
        public ActionResult Post([FromBody] GroceryList g)
        {
            if (g == null)
            {
                return BadRequest("Grocery List is null");
            }
            Console.WriteLine(g.GroceryListId);
            _groceryRepository.addGroceryList(g);
            return NoContent();
        }

        // GET: api/GroceryList/5
        [HttpGet("{id}", Name = "GetList")]
       // [Route("GetList")]
        public GroceryList Get(int id)
        {
            return _groceryRepository.getGroceryList(id);
        }

        [HttpGet("{id}", Name = "GetItemsList")]
        [Route("GetItemsList/{id}")]
        public List<Item> GetItemsList(int id)
        {
            return _groceryRepository.getItemsForList(id);
        }



        //[HttpPost]
        //[Route("AddGroceryListItem")]
        //public ActionResult AddGroceryListItem([FromBody] GroceryModel gM)
        //{
        //    if (gM == null)
        //    {
        //        Console.WriteLine("nulllzzz");
        //        return BadRequest("Grocery List is null");
        //    }

        //    foreach (var it in gM.ItList)
        //    {
        //        Console.WriteLine(it.ItemId);
        //        _groceryRepository.addGroceryListItem(gM.GrListObj.GroceryListId, it.ItemId);
        //    }
        //    return NoContent();
        //}




        [HttpPost]
        [Route("AddGroceryListItem")]
        public ActionResult AddGroceryListItem([FromBody] GroceryModel gM)
        {
            if (gM == null)
            {
                Console.WriteLine("nulllzzz");
                return BadRequest("Grocery List is null");
            }

            foreach (var it in gM.ItList)
            {
                Console.WriteLine(it.ItemId);
                _groceryRepository.addGroceryListItem(gM.GrListObj.GroceryListId, it.ItemId);
            }
            Console.WriteLine(gM.GrListObj.GroceryListId);
            return NoContent();
        }




        //// PUT: api/GroceryList/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
