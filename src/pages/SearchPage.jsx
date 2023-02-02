import React, { useContext } from "react";
import Slider from "../components/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NewsContext } from "../context/NewsContext";
import loadingGif from "../assets/loadingif.gif";
import NewsCard from "../components/NewsCard";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const { allNews } = useContext(NewsContext);

  const {state} = useLocation();
  const { searchTerm } = state;

  const sliderNews = allNews.slice(0, 3);
  const mainNews = allNews.slice(3);

  const filteredSearch = mainNews.filter((news)=>news.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container sx={{display:'flex', justifyContent:'center'}}>
        <Typography variant="h3" component="h1" gutterBottom>
          {searchTerm}
        </Typography>
      </Container>
      <Slider sliderNews={sliderNews} />
      <Box
        xs={{ d: "flex" }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {filteredSearch === undefined ? (
          <Container maxWidth="sm">
            <img src={loadingGif} alt="loading_gif" style={{ width: "100%" }} />
          </Container>
        ) : filteredSearch ? (
          filteredSearch.map((item, index) => {
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
    </Box>
  );
};

export default SearchPage;
