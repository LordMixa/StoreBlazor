using Newtonsoft.Json;
using Store.Blazor.Models.Authors;
using Store.Blazor.Services.Interfaces;

namespace Store.Blazor.Services
{
    public class AuthorService : IAuthorService
    {
        private readonly HttpClient _httpClient;
        private readonly IHttpClientFactory _httpClientFactory;

        public AuthorService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
            _httpClient = _httpClientFactory.CreateClient("BaseHttpClient");
        }

        public async Task<IEnumerable<AuthorNameModel>> GetAsync()
        {
            var response = await _httpClient.GetAsync("/api/authors");
            var responseContent = await response.Content.ReadAsStringAsync();

            var authors = JsonConvert.DeserializeObject<IEnumerable<AuthorNameModel>>(responseContent);

            return authors;
        }
    }
}
