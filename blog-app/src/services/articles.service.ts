import axios from "axios";
import { Article } from "../models/Article";

export class ArticlesService {
  axiosInstance = axios.create({
    baseURL: "http://localhost:8000/",
  });

  getArticles(): Promise<Article[]> {
    return this.axiosInstance
      .get("articles/")
      .then((response) =>
        response.data.map(
          (article: any) =>
            new Article(
              article.id,
              article.title,
              article.description,
              article.image,
              article.alt
            )
        )
      );
  }
}
