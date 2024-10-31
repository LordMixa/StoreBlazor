using Newtonsoft.Json;
using Store.Blazor.Models.Books;
using Store.Blazor.Services.Interfaces;
using System.Net.Http.Json;

namespace Store.Blazor.Services
{
    public class BookService : IBookService
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly HttpClient _httpClient;

        public BookService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
            _httpClient = _httpClientFactory.CreateClient("BaseHttpClient");
        }

        public async Task<IEnumerable<BookModel>> GetAsync()
        {
            var response = await _httpClient.GetAsync("/api/books");
            var responseContent = await response.Content.ReadAsStringAsync();

            var books = JsonConvert.DeserializeObject<IEnumerable<BookModel>>(responseContent);

            return books;
        }

        public async Task<int> CreateAsync(BookCreateModel bookCreateModel)
        {
            var httpContent = JsonContent.Create(bookCreateModel);
            var responseMessage = await _httpClient.PostAsync("/api/books", httpContent);

            var responseContent = await responseMessage.Content.ReadAsStringAsync();

            var id = JsonConvert.DeserializeObject<int>(responseContent);

            return id;
        }
    }
}
