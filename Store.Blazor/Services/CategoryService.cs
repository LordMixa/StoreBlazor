using Store.Blazor.Models.Categories;
using Store.Blazor.Services.Interfaces;
using System.Net.Http.Json;

namespace Store.Blazor.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly HttpClient _httpClient;

        public CategoryService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IEnumerable<CategoryModel>> GetAsync()
        {
            var response = await _httpClient.GetAsync("/api/categories");
            var categories = await response.Content.ReadFromJsonAsync<IEnumerable<CategoryModel>>();

            return categories;
        }
    }
}
