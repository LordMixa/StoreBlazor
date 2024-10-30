using Store.Blazor.Models.Categories;

namespace Store.Blazor.Services.Interfaces
{
    public interface ICategoryService
    {
        Task<IEnumerable<CategoryModel>> GetAsync();
    }
}
