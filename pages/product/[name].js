import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function ProductScreen({ data }) {
  return (
    <Grid container spacing={2} padding={10}>
      <Grid item xs={12} sm={6} md={2} lg={6}>
        <Card elevation={10} style={{ padding: 10 }}>
          <Typography variant="h6">{data.id}</Typography>
          <Typography variant="h3">{data.name}</Typography>
          <Typography variant="small">{data.description}</Typography>
          <Container>
            <Chip label={data.status} />
          </Container>
        </Card>
      </Grid>
    </Grid>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(
    `https://hungry-skinny-cappelletti.glitch.me/tenants/${context.query.name}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: { data: data }, // will be passed to the page component as props
  };
}
