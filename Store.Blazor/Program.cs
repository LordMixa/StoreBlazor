using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Store.Blazor.Services;
using Store.Blazor.Services.Interfaces;

namespace Store.Blazor
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");

            var uri = builder.Configuration["ApiSettings:BaseAddress"];

            builder.Services.AddHttpClient<IBookService, BookService>
            (client =>
            {
                client.BaseAddress = new Uri(uri);
            });

            builder.Services.AddHttpClient<IAuthorService, AuthorService>
            (client =>
            {
                client.BaseAddress = new Uri(uri);
            });

            builder.Services.AddHttpClient<ICategoryService, CategoryService>
            (client =>
            {
                client.BaseAddress = new Uri(uri);
            });

            await builder.Build().RunAsync();
        }
    }
}
