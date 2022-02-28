import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function ProductScreen() {
  const router = useRouter();
  //   const { data } = router.query;
  console.log("dddddd", router);
  return (
    <Grid container spacing={2} padding={10}>
      <Grid item xs={12} sm={6} md={2} lg={2}></Grid>
      <Grid item xs={8}></Grid>
    </Grid>
  );
}
