using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Services.Interfaces {
    public interface IProductService {
        Task AddProduct(Product prod);
        Task<IEnumerable<Product>> GetProducts();
        Task EditProduct(int id, Product prod);
        Task RemoveProduct(int id);
    }
}
