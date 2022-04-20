import Image from 'next/image';
import logo from "./assets/logo.png";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import chain from "./assets/chain.svg";
import Footer from "../components/Footer";
import Header from '../components/Header';

export default function Home() {
    return (
        <div className="container">
            <Header />
            <main>
                <section className="girlsontheblock">
                    <h1> Girls on the<br /> Block </h1>
                    <span className="logo-image">
                        <Image src={logo} alt="logo" /></span>
                </section>

                <section>

                    <h2> <Image src={chain} height={32} width={32} alt="chain" /> I got skillz </h2>
                    <p> There is a lack of immersive web3 education and onboarding, which is widening the gender diversity gap in web3. </p>
                    Existing solutions:
                    <ul>
                        <li> Don't meet the crypto-curious women where they are right now, in web2 </li>
                        <li> Use read only content, and add to the noise of google searches.</li>
                        <li> Don't focus on fixing the real issue which is bad onboarding experiences to web 3.</li>
                    </ul>

                </section>


                <section>

                    <h2> <Image src={chain} height={32} width={32} alt="chain" /> The problem </h2>
                    <p> There is a lack of immersive web3 education and onboarding, which is widening the gender diversity gap in web3. </p>
                    Existing solutions:
                    <ul>
                        <li> Don't meet the crypto-curious women where they are right now, in web2 </li>
                        <li> Use read only content, and add to the noise of google searches.</li>
                        <li> Don't focus on fixing the real issue which is bad onboarding experiences to web 3.</li>
                    </ul>

                </section>

                <section>

                    <h2><Image src={chain} height={32} width={32} alt="chain" /> Our solution </h2>
                    <p> Building an immersive educational experience to onboard women into web3 via gamefi. </p>
                    Our solutions:
                    <ul>

                        <li> <h3>Meeting crypto curious women where they are </h3>
                            <ul>
                                <li> We'll focus on acquisition strategies through web2 social media platforms like tiktok and instagram.   </li>
                                <li> Our PFP NFT collection will have utility in web2 and web3 to make the return on investment clear and familiar. </li>
                            </ul>
                        </li>

                        <li> <h3> Interactive onboarding, that's familiar </h3>
                            <ul>
                                <li> Our game-fi platform will be inspired by 2000s online dressup games.   </li>
                                <li> We will focus on the 4 Es.
                                    <ul>
                                        <li> education </li>
                                        <li> exposure </li>
                                        <li> experience </li>
                                        <li> environment </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li> <h3> Being user experience obsessed </h3>
                            <ul>
                                <li> Good design & user expeirence will be a core value from day 1. The transition to web3 will be frictionless.   </li>
                                <li> Down the track we hope to open source our platform so other NFT projects can leverage our interactive education experiences, and add it to their collections. </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2><Image src={chain} height={32} width={32} alt="chain" /> Our team </h2>
                    <h3> Ash <a href="https://twitter.com/womenof_web3"> <Image height={24} width={24} src={twitter} alt="twitter logo" /> </a>
                        <a href="https://linkedin.com/in/ashibhat"> <Image height={24} width={24} src={linkedin} alt="linkedIn logo" /> </a></h3>

                    <h3> Nivaaz<a href="https://twitter.com/nivaaz_nft"> <Image height={24} width={24} src={twitter} alt="twitter logo" /> </a>
                        <a href="https://linkedin.com/in/nivaaz"> <Image height={24} width={24} src={linkedin} alt="linkedIn logo" />  </a> </h3>

                </section>

            </main>
            <Footer />
        </div>
    )
}

