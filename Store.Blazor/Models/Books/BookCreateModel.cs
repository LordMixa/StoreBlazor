namespace Store.Blazor.Models.Books
{
    public class BookCreateModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime DateOfPublication { get; set; }
        public IEnumerable<int> AuthorIds { get; set; } = new List<int>();
        public IEnumerable<int> CategoryIds { get; set; } = new List<int>();
    }
}
