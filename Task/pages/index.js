import * as React from "react";

import Card from "@mui/material/Card";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { getTenants } from "../src/common/redux/reducers/tenantReducer";
import { useSelector } from "react-redux";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();
const Item = ({ item, key }) => (
  <Link href={`product/[name]`} as={`product/${item.id}`} passHref key={key}>
    <div style={{ height: 300, margin: 10 }}>
      <Card elevation={10} style={{ padding: 10 }}>
        <h1>{item.name}</h1>
        <h6>{item.description}</h6>
      </Card>
    </div>
  </Link>
);
export default function Home({ data }) {
  const [hasMore, setHasMore] = React.useState(true);
  const [data1, setData1] = React.useState(data.slice(0, 20));
  const loadMore = () => {
    if (data1.length >= 48) {
      setHasMore(false);
      return;
    }
    var count = 20;
    setTimeout(() => {
      setData1([...data1, ...data.slice(count, count + 40)]);
    }, 2000);
  };
  if (!data) {
    return <h1>Loading</h1>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main style={{ padding: 10 }}>
        <InfiniteScroll
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          dataLength={data1.length}
          next={loadMore}
          hasMore={hasMore}
          scrollThreshold={0.5}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          loader={<h4>Loading...</h4>}
        >
          {data1.map((i, index) => (
            <Grid xs={12} sm={6} md={4}>
              <Item item={i} key={index} />
            </Grid>
          ))}
        </InfiniteScroll>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    "https://hungry-skinny-cappelletti.glitch.me/tenants"
  );
  const data = await res.json();
  return {
    props: { data: data.slice(0, 50) }, // will be passed to the page component as props
  };
}
