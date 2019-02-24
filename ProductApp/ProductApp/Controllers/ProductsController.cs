using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using ProductApp.Data;
using ProductApp.Models;
using ProductApp.Services;
using ProductApp.Services.Interfaces;

namespace ProductApp.Controllers {
   [Route("api/[controller]")]
   [ApiController]
   public class ProductsController : ControllerBase {
      private readonly IProductService productService;

      public ProductsController(IProductService productService) {
         this.productService = productService;
      }

      [HttpGet]
      public async Task<ActionResult<IEnumerable<Product>>> GetProducts() {
         try {
            return Ok(await this.productService.GetProducts());
         } catch (Exception ex) {
            return BadRequest(ex.ToString());
         }
      }

      [HttpPost]
      public async Task<ActionResult> AddProduct([FromBody] Product product) {
         try {
            await this.productService.AddProduct(product);
            return Ok();
         } catch (Exception ex) {
            return BadRequest(ex.ToString());
         }
      }

      [HttpPut("{id}")]
      public async Task<ActionResult> EditProduct([FromBody] Product product, int id) {
         try {
            await this.productService.EditProduct(id, product);
            return Ok();
         } catch (Exception ex) {
            return BadRequest(ex.ToString());
         }
      }

      [HttpDelete("{id}")]
      public async Task<ActionResult> RemoveProduct(int id) {
         try {
            await this.productService.RemoveProduct(id);
            return Ok();
         } catch (Exception ex) {
            return BadRequest(ex.ToString());
         }
      }
   }
}