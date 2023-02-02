import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

const NewsCard = ({ item }) => {

  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };

  return (
    <>
      <Card sx={{paddingBottom: '.5rem', paddingTop:'.5rem'}}>
        <CardActionArea sx={{ display: "flex", width:'100%'}} href={item.url} target='_blank'>
          <Box sx={{ display: "flex", flexDirection: "column", width:'60%' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="overline" component="div">
                <i>Yazar : {item?.author}</i>
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item?.title ?? "Tesla disables gaming while driving feature"}
              </Typography>
              <Typography variant="body2" color="text.secondary" component="div">
              {item?.description ?? "Tesla disables gaming while driving feature"}
            </Typography>
              {/* <Typography variant="body2" color="text.secondary" component="div">
                {truncateOverview(item?.content, 150) ??
                  "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
              </Typography> */}
              <Typography variant="subtitle1" sx={{ color: "#ffab40" }}>
                Yazının Devamı...
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={
              item?.urlToImage ??
              "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
            }
            alt="img"
          />
        </CardActionArea>
      </Card>
    </>
  );
};

export default NewsCard;
