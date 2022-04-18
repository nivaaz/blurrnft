import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Header/>
      <main>
        <h1> Girls on the Block </h1>
        <h2> The problem </h2>
        <p>There is a lack of immersive web3 education and onboarding, which is widening the gender diversity gap in web3. </p>     
        <ul>
          Existing solutions: 
          <li> Don't meet the crypto-curious women where they are right now, in web2 </li>
          <li> Use read only content, and add to the noise of google searches.</li>
          <li> Don't focus on fixing the real issue which is bad onboarding experiences to web 3.</li>
        </ul>
        <h2> Our solution </h2>
        <p> Building an immersive educational experience to onboard women into web3 via gamefi. </p>
        <ul>
          Our solutions: 

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

          <li> Use read only content, and add to the noise of google searches.</li>
          <li> Don't focus on fixing the real issue which is bad onboarding experiences to web 3.</li>
        </ul>
      </main>
      <Footer/>
    </div>
  )
}

export const Header = () =>(
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

)

export const Footer = () => ( <footer>
  <a
    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    Built with love by 
    Ash 
    & Nivaaz
    
  </a>
</footer>)