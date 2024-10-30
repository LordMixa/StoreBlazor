namespace Store.Blazor.Models.Authors
{
    public record AuthorModel
    {
        public int Id { get; init; }
        public string FirstName { get; init; }
        public string LastName { get; init; }
        public string Biography { get; init; }
    }
}
