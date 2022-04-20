import Image from 'next/image';
import twitter from "../pages/assets/twitter.svg";

const Footer = () => (
  <footer>
    <p>     Built with love by
      <a href="https://twitter.com/womenof_web3"> Ash <Image fill="white" height={16} width={16} src={twitter} alt="twitter" /> </a>
      &  <a href="https://twitter.com/nivaaz_nft">   Nivaaz <Image height={16} width={16} src={twitter} alt="twitter" /></a>
    </p>
  </footer>
);

export default Footer;