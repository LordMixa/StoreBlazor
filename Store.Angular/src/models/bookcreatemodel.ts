export class BookCreateModel {
  title: string;
  description: string;
  price: number;
  dateOfPublication: Date;
  authorIds: Array<number>;
  categoryIds: Array<number>;

  constructor(title: string, description: string, price: number, dateOfPublication: Date) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.dateOfPublication = dateOfPublication;
    this.authorIds = [1];
    this.categoryIds = [1];
  }
}
