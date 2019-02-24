using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Services.Interfaces {
   public interface IProductHub {
      Task AddProduct(Product product);
      Task EditProduct(int id, Product prod);
      Task RemoveProduct(int id);
   }
}
