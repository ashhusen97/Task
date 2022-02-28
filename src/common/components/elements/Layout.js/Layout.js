import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <Navbar />
        {children}
      </Provider>
    </>
  );
};

export default Layout;
