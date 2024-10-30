using Store.Blazor.Models.Books;

namespace Store.Blazor.Services.Interfaces
{
    public interface IBookService
    {
        Task<IEnumerable<BookModel>> GetAsync();
        Task<int> CreateAsync(BookCreateModel bookCreateModel);
    }
}
