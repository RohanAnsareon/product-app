using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Models {
   public class Product {
      public int Id { get; set; }
      public string Name { get; set; }
      public double Cost { get; set; }
      public string Category { get; set; }
      public bool Available { get; set; }
      public int Count { get; set; }
      [DataType(DataType.DateTime)]
      public DateTime RemoveDate { get; set; }
   }
}
