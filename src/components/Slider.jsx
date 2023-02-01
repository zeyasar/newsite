import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function Slider() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => {
        return (
          <Paper key={i}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </Paper>
        );
      })}
    </Carousel>
  );
}

export default Slider;
