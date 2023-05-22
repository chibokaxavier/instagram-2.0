import React, { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          const post = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPosts(post);
        }
      ),
    [db]
  );
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          img={post.image}
          userImg={post.profileImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
