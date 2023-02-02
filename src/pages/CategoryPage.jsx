import {
  Box,
  Paper,
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";
import { styled } from "@mui/material/styles";
import loadingGif from "../assets/loadingif.gif";
import NewsCard from "../components/NewsCard";

const CategoryPage = () => {
  let { category } = useParams();
  const { getCategoryNews, categoryData } = useContext(NewsContext);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const sources = Array.from(
    new Set(categoryData.map((source) => source.source.name))
  );
  /* console.log(sources) */

  const [filteredNews, setFilteredNews] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  useEffect(() => {
    getCategoryNews(category);
  }, [category]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Item sx={{ height: "100%" }}>
              <FormControl fullWidth>
                <Select
                  value={search}
                  displayEmpty
                  onChange={handleChange}
                >
                  <MenuItem value=''>Haber Kaynağı Seçiniz...</MenuItem>
                  {sources.map((source, key) => (
                  <MenuItem value={source} key={key}>
                    {source}
                  </MenuItem>
                ))}
                  
                </Select>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Box
              xs={{ d: "flex" }}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
              flexWrap="wrap"
            >
              {categoryData === undefined ? (
                <Container maxWidth="sm">
                  <img
                    src={loadingGif}
                    alt="loading_gif"
                    style={{ width: "100%" }}
                  />
                </Container>
              ) : categoryData ? (
                categoryData.map((item, index) => {
                  return <NewsCard key={index} item={item} />;
                })
              ) : (
                <Container maxWidth="sm">
                  <Typography variant="h2" component="h1" gutterBottom>
                    Veri Bulamıyorum...
                  </Typography>
                </Container>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CategoryPage;
