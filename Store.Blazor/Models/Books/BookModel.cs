using Store.Blazor.Models.Authors;
using Store.Blazor.Models.Categories;

namespace Store.Blazor.Models.Books
{
    public record BookModel
    {
        public int Id { get; init; }
        public string Title { get; init; }
        public string Description { get; init; }
        public decimal Price { get; init; }
        public DateTime DateOfPublication { get; init; }
        public IEnumerable<AuthorModel> Authors { get; init; } = new List<AuthorModel>();
        public IEnumerable<CategoryModel> Categories { get; init; } = new List<CategoryModel>();
    }
}
