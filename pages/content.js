import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Content() {
  const [contentData, setContentData] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(async () => {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MESSAGEING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID,
    };
    
    const x = [];
    try {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "content-hub"));
      querySnapshot.forEach((doc) => {
          x.push(doc.data())
      });
      setContentData(x);
    } catch (e){
      console.log(e);
    }
  }, []);
  if (isError){
    return <p> We're in build mode, this page is coming soon. </p> 
  }
  return (
    <div>
      <h1>Content Hub</h1>
      <h2> Discover our faves</h2>
      <div>
        {contentData.map((item) => {
          return <ContentItem props={item} />;
        })}
      </div>
    </div>
  );
}

const ContentItem = ({ props }) => {
  const { title, link, tag, whyWeLoveIt } = props;
  const tags = tag?.map((item) => <p className="singleTag"> {item}</p>);
  return (
      <div key={title} className="contentContainer">
        <div className="innerContentContainer">
        <p className="itemTitle"><b>  {title} </b> </p>
        <a href={link}> {link} </a>
        <div className="tagsContainer"> {tags}</div> 
        </div>
      <p className="loveit"> {whyWeLoveIt} </p>
      </div>
  );
};
