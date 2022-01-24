import Typography from "@mui/material/Typography";
import ArticleCard from "../../components/Card";
import { ArticlesService } from "../../services/articles.service";
import { useEffect, useState } from "react";
import { Article } from "../../models/Article";
import { Alert, Skeleton, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";

export default function Articles(): JSX.Element {
  const [notification, setNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const articlesService = new ArticlesService();

    setIsLoading(true);
    articlesService
      .getArticles()
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch(() => {
        setNotification(true);
        setIsLoading(false);
      });
  }, []);

  function handleClose() {
    setNotification(false);
  }

  function getContent() {
    if (isLoading) {
      return (
        <Box style={{ width: "100%" }}>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      );
    } else {
      return articles.map((article) => <ArticleCard article={article} />);
    }
  }

  return (
    <div>
      <Snackbar
        open={notification}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Erreur lors de la récupération des données. Vérifiez que l'API tourne
          bien sur le port 8000 et est accessible !
        </Alert>
      </Snackbar>
      <Typography variant="h3" style={{ marginBottom: "30px" }}>
        Les articles (☞ﾟヮﾟ)☞
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {getContent()}
      </div>
    </div>
  );
}
