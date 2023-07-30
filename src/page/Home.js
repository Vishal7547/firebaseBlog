import React from "react";
import { useState } from "react";
import Comment from "../component/Comment";
import { useAuth } from "../context/authContext";
const Home = () => {
  // Blog content state
  const {value} = useAuth();
  const [blogContent, setBlogContent] = useState({
    title: "Sample Blog Title",
    image:
      "https://t3.ftcdn.net/jpg/03/83/64/60/360_F_383646076_TbJaoLr7PNxGFi3PF52dvnm1dtqhHtHa.jpg",

    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore soluta, nihil repellendus ullam sit natus cumque neque amet, praesentium fuga, rem ducimus dolore possimus incidunt quidem tempora dolores earum!Iste tempora nam velit ea ipsa facere officia quidem atque optio officiis, iusto quis earum, harum aspernatur eaque impedit ipsam. Facere, molestiae reiciendis dolores numquam quo nobis aliquid totam asperiores",
    video: "https://www.youtube.com/embed/aCCDaf7X3BE",
  });
console.log("home",value.subtitle)
  return (
    <> 
    {
value.map((x)=>(
 <div className="blog" key={x.id}>
      <h1>{x.title}</h1>
      <img src={x.image} alt="Blog" />
      <p>{x.subtitle}</p>
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src={x.video}
          title="Embedded Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Comment />
    </div>
))
    }
   </>
  );
};

export default Home;
