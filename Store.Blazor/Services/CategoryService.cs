using Newtonsoft.Json;
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
            var response = await _httpClient.GetAsync("/api/categories");
            var responseContent = await response.Content.ReadAsStringAsync();

            var categories = JsonConvert.DeserializeObject<IEnumerable<CategoryModel>>(responseContent);

            return categories;
        }
    }
}
