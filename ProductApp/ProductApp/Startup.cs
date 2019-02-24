using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using ProductApp.Data;
using ProductApp.Services;
using ProductApp.Services.Interfaces;

namespace ProductApp {
   public class Startup {
      public Startup(IConfiguration configuration) {
         Configuration = configuration;
      }

      public IConfiguration Configuration { get; }

      // This method gets called by the runtime. Use this method to add services to the container.
      public void ConfigureServices(IServiceCollection services) {
         services.AddSignalR();
         services.AddScoped<IProductService, ProductService>();
         services.AddDbContext<ProductsDbContext>(options => {
            options.UseSqlServer(this.Configuration.GetConnectionString("DefaultConnectionString"));
         });
         services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
         if (env.IsDevelopment()) {
            app.UseDeveloperExceptionPage();
         }
         app.UseCors(opts => {
            opts.AllowAnyHeader();
            opts.AllowAnyMethod();
            opts.AllowAnyOrigin();
            opts.AllowCredentials();
         });
         app.UseSignalR(routes => {
            routes.MapHub<ProductHub>("/producthub");
         });
         app.UseMvc();
      }
   }
}
