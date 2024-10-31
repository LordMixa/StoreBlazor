using Store.Blazor.Extensions;
using Store.Blazor.Models.Categories;
using Store.Blazor.Services.Interfaces;

namespace Store.Blazor.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly HttpClient _httpClient;
        private readonly IHttpClientFactory _httpClientFactory;

        public CategoryService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
            _httpClient = _httpClientFactory.CreateClient("BaseHttpClient");
        }

        public async Task<IEnumerable<CategoryModel>> GetAsync()
        {
            var categories = await _httpClient.GetAsync<IEnumerable<CategoryModel>>("/api/categories");

            return categories;
        }
    }
}
