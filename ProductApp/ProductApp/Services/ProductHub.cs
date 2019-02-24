using Microsoft.AspNetCore.SignalR;
using ProductApp.Models;
using ProductApp.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Services {
   public class ProductHub : Hub<IProductHub> {
      public async Task AddProduct(Product product) {
         await this.Clients.All.AddProduct(product);
      }

      public async Task EditProduct(int id, Product prod) {
         await this.Clients.All.EditProduct(id, prod);
      }

      public async Task RemoveProduct(int id) {
         await this.Clients.All.RemoveProduct(id);
      }
   }
}
