import React from "react";
import Post from "./Post";

import { faker } from "@faker-js/faker";

const DUMMY_DATA = [
  {
    id: 0,
    username: "manlikexavy",
    img: faker.image.avatar(),
    userImg: faker.image.avatar(),
    caption: " Hello how are ypou doing today hope you are oaky.",
  },
  {
    id: 1,
    username: "manlikexavy",
    img: faker.image.avatar(),
    userImg: faker.image.avatar(),
    caption: " Hello how are ypou doing today hope you are oaky.",
  },
  {
    id: 12,
    username: "manlikexavy",
    img: faker.image.avatar(),
    userImg: faker.image.avatar(),
    caption: " Hello how are ypou doing today hope you are oaky.",
  },
  {
    id: 123,
    username: "manlikexavy",
    img: faker.image.avatar(),
    userImg: faker.image.avatar(),
    caption: "asdfghjkl;",
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
