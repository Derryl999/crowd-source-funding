import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";

import img from "../../../Images/img1.svg";
import useStyles from "./style.js";

import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";

function Post() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} />

          <Typography className={classes.title} variant="h5" gutterBottom>
            Kerala relief fund
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Kerala relief fund Kerala relief fund Kerala relief fund Kerala
              relief fund Kerala relief fund Kerala relief fund Kerala relief
              fund
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.cardActions}>
          <Button size="large" color="primary" className={classes.button}>
            &nbsp; Donate &nbsp;
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Post;
