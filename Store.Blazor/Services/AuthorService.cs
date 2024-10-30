using Store.Blazor.Models.Authors;
using Store.Blazor.Services.Interfaces;
using System.Net.Http.Json;

namespace Store.Blazor.Services
{
    public class AuthorService : IAuthorService
    {
        private readonly HttpClient _httpClient;

        public AuthorService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IEnumerable<AuthorNameModel>> GetAsync()
        {
            var response = await _httpClient.GetAsync("/api/authors");
            var authors = await response.Content.ReadFromJsonAsync<IEnumerable<AuthorNameModel>>();

            return authors;
        }
    }
}
