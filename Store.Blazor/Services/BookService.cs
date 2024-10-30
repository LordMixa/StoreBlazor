using Store.Blazor.Models.Books;
using Store.Blazor.Services.Interfaces;
using System.Net.Http.Json;

namespace Store.Blazor.Services
{
    public class BookService : IBookService
    {
        private readonly HttpClient _httpClient;

        public BookService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<IEnumerable<BookModel>> GetAsync()
        {
            var response = await _httpClient.GetAsync("/api/books");
            var books = await response.Content.ReadFromJsonAsync<IEnumerable<BookModel>>();

            return books;
        }

        public async Task<int> CreateAsync(BookCreateModel bookCreateModel)
        {
            var httpContent = JsonContent.Create(bookCreateModel);
            var responseMessage = await _httpClient.PostAsync("/api/books", httpContent);

            var response = await responseMessage.Content.ReadFromJsonAsync<int>();

            return response;
        }
    }
}
