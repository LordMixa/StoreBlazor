using Store.Blazor.Models.Authors;

namespace Store.Blazor.Services.Interfaces
{
    public interface IAuthorService
    {
        Task<IEnumerable<AuthorNameModel>> GetAsync();
    }
}
