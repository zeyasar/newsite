import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import milestone from "../assets/mılestoneProject.gif";
import portfolio from "../assets/portfolio.gif";
import movieApp from "../assets/movıeApp.gif";



export default function About() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h4" component="h1" gutterBottom>
            Merhaba, &#128075; Ben Zeynep
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 5 }}>
            Ben fullstack geliştirici olma yolunda ilerliyorum. Algoritma ve
            veri yapıları, Network, SDLC, Agile Scrum Jira Linux Git/Github gibi
            temel dersler sonrasında frontend ve backend eğitimi aldım. Frontend
            teknolojilerde HTML, CSS, Javascript, Bootstrap, React (Context,
            Redux), Material-UI, Tailwind, SASS, Styled Component, jQuery, OOP,
            Axios konularına hakimim ve test konusunda Jest ve Cypress bilgim
            var. Backend teknolojilerde Python, Django, Restfull API’s,
            PostgreSQL ve SQLite konularında bilgim var. Yaptığım projelerden
            bazıları aşağıda tamamı ise Github linkinde.
          </Typography>
          <Typography variant="body1" sx={{ mt: 5 }}>
            <Link
              href="https://github.com/zeyasar/portfolio-project"
              target="_blank"
              rel="noopener"
              underline="none"
            >
              Github
            </Link>
          </Typography>
        </Container>

        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          <Card sx={{ width: 345, m: 5, maxHeight: 700 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={portfolio}
            />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button size="small">
                <Link
                  href="https://github.com/zeyasar/portfolio"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  color={"black"}
                  variant="subtitle1"
                >
                  Github
                </Link>
              </Button>
              <Button size="small">
                <Link
                  href="https://devzeynep-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  color={"black"}
                  variant="subtitle1"
                >
                  Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 345, m: 5, maxHeight: 700 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={milestone}
            />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button size="small">
                <Link
                  href="https://github.com/zeyasar/milestone-project"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  color={"black"}
                  variant="subtitle1"
                >
                  Github
                </Link>
              </Button>
              <Button size="small">
                <Link
                  href="https://milestone-project.netlify.app/"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  color={"black"}
                  variant="subtitle1"
                >
                  Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 345, m: 5, maxHeight: 700 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={movieApp}
            />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button size="small">
                <Link
                  href="https://github.com/zeyasar/Movie_App_Project_with_Firebase"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  color={"black"}
                  variant="subtitle1"
                >
                  Github
                </Link>
              </Button>
              <Button size="small">
                <Link
                  href="https://movie-project-firebase.netlify.app"
                  target="_blank"
                  rel="noopener"
                  underline="none"
                  color={"black"}
                  variant="subtitle1"
                >
                  Demo
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
}
