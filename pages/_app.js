import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import "../styles/glitch.css";
import "../public/static/plugin/bootstrap/css/bootstrap.css";
import "../public/static/plugin/font-awesome/css/all.css";
import "../public/static/plugin/et-line/style.css";
import "../public/static/plugin/themify-icons/themify-icons.css";
import "../public/static/plugin/owl-carousel/css/owl.carousel.css";
import "../public/static/plugin/magnific/magnific-popup.css";
import "../public/static/plugin/scroll/jquery.mCustomScrollbar.css";
import "../public/static/css/style.css";
import "../styles/videos.css";
// import 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap'
// import 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
import "../styles/plugins.css";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    var _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src =
      "https://cdn.matomo.cloud/jessoplucas.matomo.cloud/container_tMvLJl9v.js";
    s.parentNode.insertBefore(g, s);
  }, []); //matomo anylitics stuff

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{`Lucas Jessop's Portfolio`}</title>
        {/* <!-- Favicon --> */}

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* <!-- plugin CSS --> */}
        {/* <link
          href="static/plugin/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/font-awesome/css/all.min.css"
          rel="stylesheet"
        />
        <link href="static/plugin/et-line/style.css" rel="stylesheet" />
        <link
          href="static/plugin/themify-icons/themify-icons.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/owl-carousel/css/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/magnific/magnific-popup.css"
          rel="stylesheet"
        />
        <link
          href="static/plugin/scroll/jquery.mCustomScrollbar.min.css"
          rel="stylesheet"
        /> */}
        {/* <!-- theme css --> */}
        {/* <link href="static/css/style.css" rel="stylesheet" /> */}
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}
import "../styles/plugins.css";
export default MyApp;
