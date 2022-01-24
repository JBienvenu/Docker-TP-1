export class Article {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    alt: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.alt = alt;
  }
}
