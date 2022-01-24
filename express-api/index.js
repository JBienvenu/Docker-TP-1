const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

class Article {
  constructor(id, title, description, image, alt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.alt = alt;
  }
}

app.use(cors());

app.get("/", (req, res) => {
  res.json({ result: "Api is working, Hello !" });
});

app.get("/articles/", (req, res) => {
  const articles = [
    new Article(
      1,
      "Are You a Mediocre Developer? ME TOO",
      "I don't know how to use Docker",
      "https://images.pexels.com/photos/3662842/pexels-photo-3662842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "Kid playing with a whale toy"
    ),
    new Article(
      2,
      "Développer sur Mac",
      "Ou comment se faire du mal. Même windows c'est mieux des fois.",
      "https://images.pexels.com/photos/51964/humpback-whale-natural-spectacle-nature-mammal-51964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "Whale jumping out of the ocean"
    ),
    new Article(
      3,
      "Qu'est-ce que Docker ?",
      "Docker est un outil pour créer des conteneurs avec un logo de baleine",
      "https://images.pexels.com/photos/432197/pexels-photo-432197.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "Grayscale photo of a fish sauna"
    ),
    new Article(
      4,
      "Docker et la maltraitance animale",
      "L'arrivée de Docker coincide avec la montée de la maltraitance des baleines.",
      "https://images.pexels.com/photos/417196/pexels-photo-417196.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "Tail of a whale submerging in water"
    ),
    new Article(
      5,
      "Les micro-services",
      "Qu'est-ce qu'un micro-service, et à partir de combien de lignes de codes ça devient un service",
      "https://images.pexels.com/photos/3663059/pexels-photo-3663059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "Small wooden toys of a whale, fish and octopus"
    ),
  ];

  res.json(articles);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
