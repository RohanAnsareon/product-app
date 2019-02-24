using Microsoft.AspNetCore.SignalR;
using ProductApp.Data;
using ProductApp.Models;
using ProductApp.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Services {
   public class ProductService : IProductService {
      private readonly ProductsDbContext dbContext;
      private readonly IHubContext<ProductHub, IProductHub> hubContext;

      public ProductService(ProductsDbContext dbContext, IHubContext<ProductHub, IProductHub> hubContext) {
         this.dbContext = dbContext;
         this.hubContext = hubContext;
      }

      public async Task AddProduct(Product prod) {
         this.dbContext.Products.Add(prod);
         await this.dbContext.SaveChangesAsync();
         await this.hubContext.Clients.All.AddProduct(prod);
      }

      public async Task EditProduct(int id, Product prod) {
         var product = this.dbContext.Products.Find(id);
         product.Name = prod.Name;
         product.Available = prod.Available;
         product.Category = prod.Category;
         product.Cost = prod.Cost;
         product.Count = prod.Count;
         product.RemoveDate = prod.RemoveDate;
         this.dbContext.SaveChanges();
         await this.hubContext.Clients.All.EditProduct(id, prod);
      }

      public async Task<IEnumerable<Product>> GetProducts() {
         return this.dbContext.Products.ToList();
      }

      public async Task RemoveProduct(int id) {
         this.dbContext.Products.Remove(
             this.dbContext.Products.Find(id)
         );
         await this.dbContext.SaveChangesAsync();
         await this.hubContext.Clients.All.RemoveProduct(id);
      }
   }
}
