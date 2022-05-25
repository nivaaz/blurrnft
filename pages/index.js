import logo from "./assets/logo.png";
import chain from "./assets/chain.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import Image from "next/image";

export default function Beans() {
  return (
    <>
      <div className="container">
        <section className="girlsontheblock">
          <h1>
            Girls on the
            <br /> BLOCK{" "}
          </h1>
          <span className="logo-image">
            <Image src={logo} />
          </span>
        </section>
        <section>
          <h2>
            <Image src={chain} height={32} width={32} /> GotB
          </h2>
          <p>
            Girls on the Block is a play-to-earn game & NFT for women and
            non-binary who want to learn, earn & explore web3 safely, while
            connecting with like-minded women. Our game is inspired by 2000s
            online fashion dress-up games.
          </p>
        </section>
        <section>
          <h2>
            <Image src={chain} height={32} width={32} /> The problem{" "}
          </h2>
          <p>We found three key problems around onboarding for Web3:</p>
          <ul>
            <li>
              {" "}
              There is no safe environment to learn and fail that is catered to
              individual learning styles.{" "}
            </li>
            <li>
              The user experiences are foreign, i.e. they don't leverage
              familiar web2 constructs when onboarding first-time users.
            </li>
            <li>There is a clear gender diversity gap. </li>
          </ul>
        </section>

        <section>
          <h2>
            <Image src={chain} height={32} width={32} /> Our solution{" "}
          </h2>
          <p>
            {" "}
            Girls on the Block is an immersive game for women and non-binary who
            want to learn, earn & explore web3 safely, while connecting with
            like-minded women. Our game is inspired by 2000s online fashion
            dress-up games, and will allow women to learn about web3, in a
            variety of ways such as crypto fashion adventures.
          </p>

          <p>
            {" "}
            Our NFT Collection, launching later this year, will give holders
            access to a range of benefits, including:
          </p>
          <ul>
            <li>
              Community access and advisory support from leading entrepreneurs
            </li>
            <li>Digital Fashion and Game pieces</li>
            <li>Access to perks from partner communities</li>
            <li>Opportunities to earn while playing </li>
            <li>
              A say in how we iterate on our mission, which is to make
              onboarding into web3 simple and fun.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <Image src={chain} height={32} width={32} /> Our team{" "}
          </h2>
          <h3>
            {" "}
            Ash{" "}
            <a href="https://twitter.com/womenof_web3">
              {" "}
              <Image height={24} width={24} src={twitter} />{" "}
            </a>
            <a href="https://linkedin.com/in/ashibhat">
              {" "}
              <Image height={24} width={24} src={linkedin} />{" "}
            </a>
          </h3>

          <h3>
            {" "}
            Nivaaz
            <a href="https://twitter.com/nivaaz_nft">
              {" "}
              <Image height={24} width={24} src={twitter} />{" "}
            </a>
            <a href="https://linkedin.com/in/nivaaz">
              {" "}
              <Image height={24} width={24} src={linkedin} />{" "}
            </a>{" "}
          </h3>
        </section>
      </div>
    </>
  );
}
 