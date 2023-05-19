import React from "react";
import Post from "./Post";

const DUMMY_DATA = [
  {
    id: 0,
    username: "manlikexavy",
    img: "https://cdn.pixabay.com/photo/2023/05/01/06/19/penguin-7962192__340.jpg",
    userImg:
      "https://cdn.pixabay.com/photo/2023/05/01/06/19/penguin-7962192__340.jpg",
    caption: " Hello how are ypou doing today hope you are oaky.",
  },
  {
    id: 1,
    username: "manlikexavy",
    img: "https://cdn.pixabay.com/photo/2023/05/01/06/19/penguin-7962192__340.jpg",
    userImg:
      "https://cdn.pixabay.com/photo/2023/05/01/06/19/penguin-7962192__340.jpg",
    caption: " Hello how are ypou doing today hope you are oaky.",
  },
  {
    id: 12,
    username: "manlikexavy",
    img: "https://cdn.pixabay.com/photo/2023/05/01/06/19/penguin-7962192__340.jpg",
    userImg:
      "https://cdn.pixabay.com/photo/2023/05/01/06/19/penguin-7962192__340.jpg",
    caption: " Hello how are ypou doing today hope you are oaky.",
  },
  {
    id: 123,
    username: "manlikexavy",
    img: "https://cdn.pixabay.com/photo/2023/05/01/06/19/penguin-7962192__340.jpg",
    userImg:
      "https://cdn.pixabay.com/photo/2023/05/01/06/19/penguin-7962192__340.jpg",
    caption: " Hello how are ypou doing today hope you are oaky.",
  },
];

const Posts = () => {
  return (
    <div>
      {DUMMY_DATA.map((data) => (
        <Post
          key={data.id}
          username={data.username}
          img={data.img}
          userImg={data.userImg}
          caption={data.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
