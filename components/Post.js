import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "@firebase/firestore";
import { db } from "@/firebase";
import Comment from "./Comment";
import Moment from "react-moment";

const Post = ({ id, img, userImg, username, caption }) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(
    () =>
      onSnapshot(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc"),
        (snapshot) => {
          const post = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setComments(post);
        }
      ),
    [db]
  );
  console.log(comments);
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full  border h-12 w-12  p-1 mr-3 "
          alt="img"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* image */}
      <img src={img} alt="img" className="object-cover w-full " />
      {/* buttons */}

      {session && (
        <div className="flex justify-between pt-4 px-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <div className="rotate-45">
              <PaperAirplaneIcon className="btn" />
            </div>
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* caption */}
      <p className="truncate p-5">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
          {comments.map((a) => (
            <div key={a.id} className=" flex items-center space-x-2 mb-2">
              <img src={a.userImage} className="h-7 rounded-full" alt="" />
              <p className="text-sm flex-1">
                <span className="font-bold">{a.username}</span>
                {"  "}
                {a.comment}
              </p>

              <Moment fromNow className="pr-5 text-sm"> {a.tiemstamp && a.tiemstamp.toDate()} </Moment>
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {session && (
        <>
          <form className="flex items-center p-4">
            <EmojiHappyIcon className="h-7 " />
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border-none flex-1 focus:ring-0 outline-none"
              placeholder="Add a comment"
            />
            <button
              type="submit"
              disabled={!comment.trim()}
              onClick={sendComment}
              className="font-semibold text-blue-400"
            >
              Post
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Post;
