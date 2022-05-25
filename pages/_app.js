import "./home.css";
import Head from "next/head";
import Image from "next/image";
import twitter from "./assets/twitter.svg";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="layout">
      <nav> <a href='/'> Girls on the block </a> <a href='https://twitter.com/girlsonthechain'> <Image height={20} width={20} src = {twitter}/> </a> </nav>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

const Header = () => (
  <Head>
    <title>Girls on the block</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const Footer = () => (
  <footer>
    <p>
      Built with love by
      <a href="https://twitter.com/womenof_web3">
        {" "}
        Ash <Image fill="white" height={16} width={16} src={twitter} />{" "}
      </a>
      &{" "}
      <a href="https://twitter.com/nivaaz_nft">
        {" "}
        Nivaaz <Image height={16} width={16} src={twitter} />
      </a>
    </p>
  </footer>
);
