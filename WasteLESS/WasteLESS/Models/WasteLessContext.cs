using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace WasteLESS.Models
{
    public class WasteLessContext : DbContext
    {
        public WasteLessContext(): base()
        {

        }

        public DbSet<Item> Items { get; set; } 
        public DbSet<GroceryList> GroceryLists { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<GroceryListItem> GroceryListItems { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseSqlServer(@"Data Source=(local);Initial Catalog=WasteLessDB;Trusted_Connection=True;MultipleActiveResultSets=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GroceryListItem>().HasKey(sc => new { sc.GroceryListId, sc.ItemId});
        }
    }
}
    