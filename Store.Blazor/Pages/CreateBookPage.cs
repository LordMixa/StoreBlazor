using Store.Blazor.Models.Authors;
using Store.Blazor.Models.Books;
using Store.Blazor.Models.Categories;

namespace Store.Blazor.Pages
{
    public partial class CreateBookPage 
    {
        private List<AuthorNameModel> SelectedAuthors = new();
        private List<CategoryModel> SelectedCategories = new();

        private List<int> CreatedBookIds = new();

        private IEnumerable<AuthorNameModel> Authors = new List<AuthorNameModel>();
        private IEnumerable<CategoryModel> Categories = new List<CategoryModel>();

        private string _title;
        private string _description;
        private DateTime _dateOfPublication;
        private decimal _price;

        private bool isOpenAuthor;
        private bool isOpenCategory;

        private void ToggleDropdownAuthor()
        {
            isOpenAuthor = !isOpenAuthor;
        }

        private void ToggleDropdownCategory()
        {
            isOpenCategory = !isOpenCategory;
        }

        private void ToggleSelectionAuthors(AuthorNameModel item, object isChecked)
        {
            if ((bool)isChecked)
            {
                SelectedAuthors.Add(item);
            }
            else
            {
                SelectedAuthors.Remove(item);
            }
        }

        private void ToggleSelectionCategories(CategoryModel item, object isChecked)
        {
            if ((bool)isChecked)
            {
                SelectedCategories.Add(item);
            }
            else
            {
                SelectedCategories.Remove(item);
            }
        }

        private async void CreateBook()
        {
            var book = new BookCreateModel
            {
                Title = _title,
                Description = _description,
                Price = _price,
                DateOfPublication = _dateOfPublication,
                AuthorIds = SelectedAuthors.Select(a => a.Id).ToList(),
                CategoryIds = SelectedCategories.Select(c => c.Id).ToList(),
            };
            var response = await bookService.CreateAsync(book);

            CreatedBookIds.Add(response);
        }

        protected override async Task OnInitializedAsync()
        {
            Authors = await authorService.GetAsync();

            Categories = await categoryService.GetAsync();
        }
    }
}
