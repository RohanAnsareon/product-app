using Microsoft.EntityFrameworkCore;
using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Data {
    public class ProductsDbContext : DbContext {
        public ProductsDbContext(DbContextOptions<ProductsDbContext> options) : base(options) {
            Database.EnsureCreated();
        }

        public DbSet<Product> Products { get; set; }
    }
}
