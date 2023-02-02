import React, { useContext, useState } from "react";
import Slider from "../components/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NewsContext } from "../context/NewsContext";
import loadingGif from "../assets/loadingif.gif";
import NewsCard from "../components/NewsCard";
import Paginate from "../components/Paginate";



const Home = () => {
  const { allNews } = useContext(NewsContext);

  const sliderNews = allNews.slice(0, 3);
  const mainNews = allNews.slice(3);

  const [currentPage, setCurrentPage] = useState(1)
  const [newsPerPage] = useState(20)

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = mainNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPagesNum = Math.ceil(mainNews.length / newsPerPage)


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Slider sliderNews={sliderNews} />
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {currentNews === undefined ? (
          <Container maxWidth="sm">
            <img src={loadingGif} alt="loading_gif" style={{ width: "100%" }} />
          </Container>
        ) : currentNews ? (
          currentNews.map((item, index) => {
            return <NewsCard key={index} item={item} />;
          })
        ) : (
          <Container maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              I can't find data
            </Typography>
          </Container>
        )}
      </Box>

      <Container sx={{display:'flex', justifyContent:'center'}}>
        <Paginate pages={totalPagesNum} setCurrentPage={setCurrentPage} />
      </Container>
      
    </Box>
  );
};

export default Home;
