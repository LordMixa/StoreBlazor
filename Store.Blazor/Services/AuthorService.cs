using Store.Blazor.Extensions;
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
            var authors = await _httpClient.GetAsync<IEnumerable<AuthorNameModel>>("/api/authors");

            return authors;
        }
    }
}
