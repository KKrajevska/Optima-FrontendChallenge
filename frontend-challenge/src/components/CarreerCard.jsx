import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

export const CarreerCard = () => {
  return (
    <Card>
      <CardActions>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lorem Ipsum
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </CardContent>
      </CardActions>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
