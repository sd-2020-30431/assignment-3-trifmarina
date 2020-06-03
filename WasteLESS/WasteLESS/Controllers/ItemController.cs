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
    public class ItemController : ControllerBase
    {
        private ItemRepo _itemRepository = new ItemRepo();

        // GET: api/Item
        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return _itemRepository.getAllItems();
        }

        [HttpGet]
        [Route("expire")]
        public IEnumerable<Item> GetItemsExpiring()
        {
            return _itemRepository.getAllItemsExpiring();
        }

        [HttpGet]
        [Route("ideal/{id}")]
        public int GetIdeal(int id)
        {
            Item it = _itemRepository.getItem(id);
            int burn;
            int nr_days = (it.ExpirationDate - DateTime.Today).Days;
            if (nr_days > 0)
                burn = it.Calories / nr_days;
            else
                burn = 0;
            return burn;
        }

        // GET: api/Item/5
        [HttpGet("{id}", Name = "Get")]
        public Item Get(int id)
        {
            return _itemRepository.getItem(id);
        }

        // POST: api/Item/Add
        [HttpPost]
        [Route("Add")]
        public ActionResult Post([FromBody] Item i)
        {
            if (i == null)
            {
                return BadRequest("Item is null");
            }
            int burn;
            int nr_days = (i.ExpirationDate - DateTime.Today).Days;
            if (nr_days > 0)
                burn = i.Calories / nr_days;
            else
                burn = 0;
            i.Ideal = burn;
            _itemRepository.createItem(i);
            return NoContent();
        }

        [HttpGet]
        [Route("Report")]
        public Object GetReport()
        {

            var rep = new Report();
            rep.NrItems = _itemRepository.getItemsNr();
            rep.ItemsExpired = _itemRepository.getItemsExpired();
            rep.ItemsExpiredBeforeConsumption = _itemRepository.getItemsExpiredBeforeConsumption();

            return new
            {
                rep.NrItems,
                rep.ItemsExpired,
                rep.ItemsExpiredBeforeConsumption
            };
        }

        //// PUT: api/Item/5
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
